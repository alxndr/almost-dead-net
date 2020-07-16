import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {filter, find, groupWith, propEq} from 'ramda'

import {
  SEGUES_URL,
  SONG_PERFORMANCES_URL,
  SONGS_URL,
  TEASES_URL,
} from '../data'
import {parseWithCache} from '../fetch'
import routes, {url} from '../routes'

import Segue from './segue'
import PerfNote from './perf_note'
import TeasesNote from './teases_note'

import './setlist.css'
import 'react-tippy/dist/tippy.css'

const findByIntegerId = (id) => find(propEq('id', Number(id)))

export default function Setlist(props) {
  const [performances, setPerformances] = useState(null)
  const [segues, setSegues] = useState(null)
  const [songs, setSongs] = useState(null)
  const [teases, setTeases] = useState(null)
  useEffect(() => {
    parseWithCache(SONG_PERFORMANCES_URL, setPerformances)
    parseWithCache(SEGUES_URL, setSegues)
    parseWithCache(SONGS_URL, setSongs)
    parseWithCache(TEASES_URL, setTeases)
  }, [])
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
      const performanceData = findByIntegerId(perfId)(performances)
      const songData = find(propEq('id', performanceData.song_id))(songs)
      return {
        suite: songData.suite,
        songData,
        performanceData,
      }
    })
  )
  return <>
    <p className="setlist__label">
      {props.isEncore
        ? `Encore ${props.which > 1 ? props.which : ''}`
        : `Set ${props.which}`
      }
    </p>
    <ol className="setlist">
      {groupedBySuite.map((songOrSuite) => {
        if (songOrSuite.length > 1) {
          return <li key={songOrSuite[0].performanceData.id} className="suite">
            {songOrSuite[0].suite} suite:
            <ul>
              {songOrSuite.map(({songData, performanceData}) => {
                const displayName = songData.nicknames
                  ? songData.nicknames.split(';', 1)
                  : songData.title
                const teasesArray = filter(propEq('performance_id', performanceData.id))(teases)
                return <li key={performanceData.id}>
                  <Link to={url(routes.song, {id: songData.id})}>
                    {displayName}
                  </Link>
                  {performanceData.notes && <PerfNote notes={performanceData.notes} />}
                  {teasesArray.length ? <TeasesNote list={teasesArray} /> : false}
                </li>
              })}
            </ul>
          </li>
        }
        // regularly scheduled programming
        const [{performanceData, songData}] = songOrSuite
        const segueData = find(propEq('from_perf_id', performanceData.id))(segues)
        const teasesArray = filter(propEq('performance_id', performanceData.id))(teases)
        return <li key={performanceData.id}>
          <Link to={url(routes.song, {id: performanceData.song_id})}>
            {songData.title}
          </Link> {performanceData.variation || false}
          {performanceData.notes && <PerfNote notes={performanceData.notes} />}
          {teasesArray.length ? <TeasesNote list={teasesArray} /> : false}
          {segueData && <Segue {...segueData} />}
          </li>
      })}
        </ol>
    </>
}
