import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Tooltip} from 'react-tippy'
import {filter, find, propEq} from 'ramda'

import {
  SEGUES_URL,
  SONG_PERFORMANCES_URL,
  TEASES_URL,
} from '../data'
import {parseWithCache} from '../fetch'
import routes, {url} from '../routes'

import Segue from './segue'

import './setlist.css'
import 'react-tippy/dist/tippy.css'

function PerformanceNote({notes}) {
  return <Tooltip title={notes} trigger="mouseenter focus click">
    <span className="setlist__songnote" aria-label="notes" role="img">📓
      <span className="hidden">{notes}</span>
    </span>
  </Tooltip>
}

function Teases({list}) {
  console.log('tease', list)
  const teases = `Tease(s): ${list.map(({song_name}) => song_name).join(', ')}`
  return <Tooltip title={teases} trigger="mouseenter focus click">
    <span className="setlist__songteases" aria-label="notes" role="img">🎧
      <span className="hidden">{teases}</span>
    </span>
  </Tooltip>
}

const findByIntegerId = (id) => find(propEq('id', Number(id)))

export default function Setlist(props) {
  const [performances, setPerformances] = useState(null)
  const [segues, setSegues] = useState(null)
  const [teases, setTeases] = useState(null)
  useEffect(() => {
    parseWithCache(SONG_PERFORMANCES_URL, setPerformances)
    parseWithCache(SEGUES_URL, setSegues)
    parseWithCache(TEASES_URL, setTeases)
  }, [])
  if (!(performances && segues && teases)) {
    return <p>Loading...</p>
  }
  if (!performances.length) {
    return <p>Uh oh, no sets found...</p>
  }
  if (!segues.length) {
    return <p>Uh oh, no segues found...</p>
  }
  if (!teases.length) {
    return <p>Uh oh, no teases found...</p>
  }
  return <>
    {props.isEncore
      ? <p>Encore {props.which > 1 && props.which}</p>
      : <p>Set {props.which}</p>
    }
    <ol>
      {props.setlist.map(perf_id => {
        const performanceData = findByIntegerId(perf_id)(performances)
        const segueData = find(propEq('from_perf_id', Number(performanceData.id)))(segues)
        const teasesArray = filter(propEq('performance_id', Number(performanceData.id)))(teases)
        return <li key={performanceData.id}>
          <Link to={url(routes.song, {id: performanceData.song_id})}>
            {performanceData.song_name}
          </Link>
          {performanceData.notes && <PerformanceNote notes={performanceData.notes} />}
          {teasesArray.length ? <Teases list={teasesArray} /> : false}
          {segueData && <Segue {...segueData} />}
        </li>
      })}
    </ol>
  </>
}
