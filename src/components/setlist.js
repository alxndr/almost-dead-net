import React, {useEffect, useState} from 'react'
import Papa from 'papaparse'
import {find, propEq} from 'ramda'

import {SONG_PERFORMANCES_URL} from '../data'

const findById = (id) => find(propEq('id', id))

const papaOptions = {
  download: true,
  dynamicTyping: true,
  header: true,
  worker: true,
}

export default function Setlist(props) {
  console.log('setlist seeing...', props)
  const [performances, setPerformances] = useState(null)
  useEffect(() => {
    Papa.parse(SONG_PERFORMANCES_URL, { ...papaOptions,
      complete: ({data, errors, meta}) => {
        if (errors.length)
          throw new Error('Ruh roh', {data, errors, meta})
        setPerformances(data)
      },
    })
  }, [])
  if (!performances) {
    return <p>Loading sets...</p>
  }
  if (!performances.length) {
    return <p>Uh oh, no sets found...</p>
  }
  global.console.log({performances})
  return <>
    {props.isEncore
      ? <p>Encore {props.which > 1 && props.which}</p>
      : <p>Set {props.which}</p>
    }
    <ol>
      {props.setlist.map(perf_id => {
        const perf = findById(perf_id)(performances)
        global.console.log({perf})
        return <li>{perf.song_name}</li>
      })}
    </ol>
  </>
}
