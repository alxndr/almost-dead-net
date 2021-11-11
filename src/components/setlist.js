import React from 'react'
import {filter, find, groupWith, propEq} from 'ramda'
import classnames from 'classnames'

import Segue from './segue'
//import BustOutBadge from './bust_out_badge'
//import TimePlayedBadge from './time_played_badge'
import PerfNote from './perf_note'
import TeasesNote from './teases_note'
import Link from './link-with-previous-url'

import './setlist.css'
import 'react-tippy/dist/tippy.css'

const findById = (id) => find(propEq('id', id))

function SetlistEntry({performanceData, songData, segues, teases, previousUrl}) {
  const displayName = songData.title
  const segueData = find(propEq('from_perf_id', performanceData.id))(segues)
  const teasesArray = filter(propEq('performance_id', performanceData.id))(teases)
  const url = `/song/${performanceData.song_id}`
  return <li className={classnames('setlist__track', {highlight: previousUrl?.endsWith(url)})}>
    <Link to={url}>
      {displayName}
    </Link>
    {' '}
    {performanceData.variation || false}
    {segueData && <Segue {...segueData} />}
    {/*<TimePlayedBadge prevPerf={Number(performanceData.prev_perfid)} nextPerf={Number(performanceData.next_perfid)} />*/}
    {/*<BustOutBadge showgap={Number(performanceData.showgap)} />*/}
    {performanceData.notes && <PerfNote notes={performanceData.notes} />}
    {teasesArray.length ? <TeasesNote list={teasesArray} /> : false}
  </li>
}

export default function Setlist(props) {
  const {
    setlist,
    performances,
    segues,
    songs,
    teases,
    isEncore,
    which,
    previousUrl
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
  const groupedBySuite = groupWith(
    (a, b) => a.suite && a.suite === b.suite,
    setlist.map((perfId) => {
      const performanceData = findById(perfId)(performances)
      const songData = findById(performanceData.song_id)(songs)
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
          const lastSong = songOrSuite[songOrSuite.length - 1]
          return <li key={songOrSuite[0].performanceData.id} className="suite">
            {songOrSuite[0].suite} suite
            <ul>
              {songOrSuite.map(({songData, performanceData}) => {
                return <SetlistEntry
                  key={performanceData.id}
                  performanceData={performanceData}
                  songData={songData}
                  segues={segues}
                  teases={teases}
                  previousUrl={previousUrl}
                />
              })}
            </ul>
            {lastSong && lastSong.performanceData &&
              <Segue {...find(propEq('from_perf_id', lastSong.performanceData.id))(segues)} className="suite__segue" />}
          </li>
        }
        // regularly scheduled programming
        const [{performanceData, songData}] = songOrSuite
        return <SetlistEntry
          key={performanceData.id}
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
