import React, {useEffect, useState} from 'react'
import {find, propEq} from 'ramda'

import {getCsv} from '../fetch'
import Segue from './segue'

import {
  SEGUES_URL,
  SONG_PERFORMANCES_URL,
} from '../data'

const findByIntegerId = (id) => find(propEq('id', Number(id)))

export default function Setlist(props) {
  const [performances, setPerformances] = useState(null)
  const [segues, setSegues] = useState(null)
  useEffect(() => {
    getCsv(SONG_PERFORMANCES_URL, setPerformances)
    getCsv(SEGUES_URL, setSegues)
  }, [])
  if (!performances) {
    return <p>Loading sets...</p>
  }
  if (!segues) {
    return <p>Loading segues...</p>
  }
  if (!performances.length) {
    return <p>Uh oh, no sets found...</p>
  }
  if (!segues.length) {
    return <p>Uh oh, no segues found...</p>
  }
  global.console.log({performances, segues})
  return <>
    {props.isEncore
      ? <p>Encore {props.which > 1 && props.which}</p>
      : <p>Set {props.which}</p>
    }
    <ol>
      {props.setlist.map(perf_id => {
        const performanceData = findByIntegerId(perf_id)(performances)
        const segueData = find(propEq('from_perf_id', Number(performanceData.id)))(segues)
        console.log({performanceData, segueData})
        return <li>
          {performanceData.song_name}
          {segueData && <Segue {...segueData} />}
          </li>
      })}
    </ol>
  </>
}
