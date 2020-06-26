import React, {useState, useEffect} from 'react'
import Papa from 'papaparse'

import {SHOWS_URL} from '../data'

function ShowEntry({date, id}) {
  return <li>
    <a href={`/show/${id}`}>{date}</a>
  </li>
}

const UNDEF = undefined

export default function ShowsList() {
  const [shows, setShows] = useState(UNDEF)
  useEffect(() => {
    Papa.parse(SHOWS_URL, {
      complete: ({data, errors, meta}) => {
        if (errors.length)
          throw new Error('Ruh roh', {data, errors, meta})
        setShows(data)
      },
      download: true,
      header: true,
      worker: true,
    })
  }, [])
  global.console.log(shows)
  if (shows === UNDEF) {
    return <p>Loading...</p>
  }
  return <ul className="shows">
    {shows.length
      ? shows.map(show => <ShowEntry key={show.id} date={show.date} id={show.id} />)
      : <li>Uh oh, no shows found...</li>
    }
  </ul>
}
