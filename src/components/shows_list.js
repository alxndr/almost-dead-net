import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {getCsv} from '../fetch'
import routes from '../routes';

import {SHOWS_URL} from '../data'

import './shows_list.css'

function ShowEntry({date, id}) {
  return <li>
    <Link to={routes.show.replace(':id', id)}>{date}</Link>
  </li>
}

const UNDEF = undefined

export default function ShowsList() {
  const [shows, setShows] = useState(UNDEF)
  useEffect(() => {
    getCsv(SHOWS_URL, setShows)
  }, [])
  if (shows === UNDEF) {
    return <p>Loading...</p>
  }
  return <ol className="showslist">
    {shows.length
      ? shows.map(show => <ShowEntry key={show.id} date={show.date} id={show.id} />)
      : <li>Uh oh, no shows found...</li>
    }
  </ol>
}
