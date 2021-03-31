import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'
import {filter, find, groupWith, propEq} from 'ramda'

import Segue from './segue'
import PerfNote from './perf_note'
import TeasesNote from './teases_note'

import './setlist.css'
import 'react-tippy/dist/tippy.css'

const findById = (id) => find(propEq('id', id))

function SetlistEntry({performanceData, songData, segues, teases}) {
  const displayName = songData.title
  const segueData = find(propEq('from_perf_id', performanceData.id))(segues)
  const teasesArray = filter(propEq('performance_id', performanceData.id))(teases)
  return <li>
    <Link to={`/song/${performanceData.song_id}`}>
      {displayName}
    </Link>
    {' '}
    {performanceData.variation || false}
    {segueData && <Segue {...segueData} />}
    {performanceData.notes && <PerfNote notes={performanceData.notes} />}
    {teasesArray.length ? <TeasesNote list={teasesArray} /> : false}
  </li>
}

export default function Setlist(props) {
  const {
    performances,
    segues,
    songs,
    teases
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
    props.setlist.map((perfId) => {
      const performanceData = findById(perfId)(performances)
      const songData = findById(performanceData.song_id)(songs)
      return {
        suite: songData.suite,
        songData,
        performanceData,
      }
    })
  )
  return <div className="setlist__set">
    <p className="setlist__setlabel">
      {props.which === 'soundcheck'
        ? 'Soundcheck'
        : props.isEncore
          ? `Encore ${props.which > 1 ? props.which : ''}`
          : `Set ${props.which}`
      }
    </p>
    <ol className="setlist__tracks">
      {groupedBySuite.map((songOrSuite) => {
        if (songOrSuite.length > 1) {
          return <li key={songOrSuite[0].performanceData.id} className="suite">
            {songOrSuite[0].suite} suite:
            <ul>
              {songOrSuite.map(({songData, performanceData}) => {
                return <SetlistEntry
                  key={performanceData.id}
                  performanceData={performanceData}
                  songData={songData}
                  segues={segues}
                  teases={teases}
                />
              })}
            </ul>
          </li>
        }
        // regularly scheduled programming
        const [{performanceData, songData}] = songOrSuite
        return <SetlistEntry key={performanceData.id} performanceData={performanceData} songData={songData} segues={segues} teases={teases} />
      })}
    </ol>
  </div>
}
