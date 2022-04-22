import React from 'react'
import {filter, find, groupWith, partition, propEq} from 'ramda'
import classnames from 'classnames'
import {Tooltip} from 'react-tippy'

import Segue from './segue'
import PerfNote from './perf_note'
import TeasesNote from './teases_note'
import Link from './link-with-previous-url'

import './setlist.css'
import 'react-tippy/dist/tippy.css'

const findById = (id) => find(propEq('jsonId', id))
const filterBySongId = (id) => filter(propEq('song.jsonId', id))

function SetlistEntry({inSuite, performanceData, songData, segues, teases, previousUrl}) {
  const displayName = songData.title
  const segueData = find(propEq('from_perf_id', performanceData.jsonId))(segues)
  const teasesArray = filter(propEq('performance.jsonId', performanceData.jsonId))(teases)
  const url = `/song/${performanceData.song.jsonId}`
  const classes = classnames('setlist__track', {
    highlight: previousUrl?.endsWith(url),
    [`stars-${performanceData.stars}`]: !!performanceData.stars,
  })
  return <li className={classes}>
    <Link to={url}>
      {!inSuite && songData.suite && `(${songData.suite} suite) ` || ''}
      {displayName}
    </Link>
    {' '}
    {performanceData.variation || false}
    {segueData && <Segue {...segueData} />}
    {performanceData.isDebut && <Tooltip title="first time played" trigger="mouseenter focus click">
      <span className="setlist__track__badge setlist__track__badge--ftp" aria-label="notes" role="img">🆕
        <span className="hidden">first time played</span>
      </span>
    </Tooltip>}
    {performanceData.notes && <PerfNote notes={performanceData.notes} />}
    {teasesArray.length ? <TeasesNote list={teasesArray} /> : false}
  </li>
}

export default function Setlist(props) {
  const {
    allSets = [],
    allShows = [],
    isEncore,
    performances,
    previousUrl,
    segues,
    setlist,
    showId,
    songs,
    teases,
    which,
  } = props
  if (!(performances && songs && segues && teases)) {
    return <p>Loading...</p>
  }
  if (!performances.length) {
    return <p>Uh oh, no sets found...</p>
  }
  if (!songs.length) {
    return <p>Uh oh, no songs found...</p>
  }
  if (!segues.length) {
    return <p>Uh oh, no segues found...</p>
  }
  if (!teases.length) {
    return <p>Uh oh, no teases found...</p>
  }
  const showIdInt = Number(showId)
  const groupedBySuite = groupWith(
    (a, b) => a.suite && a.suite === b.suite,
    setlist.map((perfId) => {
      const performanceData = findById(perfId)(performances)
      const songData = findById(performanceData.song.jsonId)(songs)
      const allPerfsOfThisSong = filterBySongId(songData.jsonId)(performances)
      const setsForAllPerfsOfThisSong = allPerfsOfThisSong.map(perfData => allSets.find(set => set.setlist.split(':').includes(perfData.jsonId)))
      const showsForThoseSets = setsForAllPerfsOfThisSong.map(setData => allShows.find(show => [show.soundcheck, show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData?.jsonId)))
      const [earlierShows] = partition(showData => Number(showData?.jsonId) < showIdInt, showsForThoseSets)
      if (allShows.length && !earlierShows.length)
        performanceData.isDebut = true
      return {
        suite: songData.suite,
        songData,
        performanceData,
      }
    })
  )
  return <div className={`setlist__set setlist__set-${isEncore ? 'encore' : which}`}>
    <h3 className="setlist__setlabel">
      {which === 'soundcheck'
        ? 'Soundcheck'
        : isEncore
          ? `Encore ${which > 1 ? which : ''}`
          : `Set ${which}`
      }
    </h3>
    <ol className="setlist__tracks">
      {groupedBySuite.map((songOrSuite) => {
        if (songOrSuite.length > 1) {
          const firstSong = songOrSuite[0]
          const suiteName = firstSong.suite
          const lastSong = songOrSuite[songOrSuite.length - 1]
          const mostStarsInConstituentSongs = Math.max(...songOrSuite.map(song => Number(song.performanceData.stars)))
          return <li key={firstSong.performanceData.jsonId} className={`setlist__suite ${mostStarsInConstituentSongs ? `stars-${mostStarsInConstituentSongs}` : ''}`}>
            {suiteName} suite
            <ul>
              {songOrSuite.map(({songData, performanceData}) => {
                return <SetlistEntry
                  key={performanceData.jsonId}
                  inSuite={true}
                  performanceData={performanceData}
                  songData={songData}
                  segues={segues}
                  teases={teases}
                  previousUrl={previousUrl}
                />
              })}
            </ul>
            {lastSong?.performanceData &&
              <Segue {...find(propEq('from_perf_id', lastSong.performanceData.jsonId))(segues)} className="setlist__suite__segue" />
            }
          </li>
        }
        // regularly scheduled programming
        const [{performanceData, songData}] = songOrSuite
        return <SetlistEntry
          key={performanceData.jsonId}
          inSuite={false}
          performanceData={performanceData}
          songData={songData}
          segues={segues}
          teases={teases}
          previousUrl={previousUrl}
        />
      })}
    </ol>
  </div>
}
