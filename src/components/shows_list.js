import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { filter, find, prop, propEq } from 'ramda'

import {parseWithCache} from '../fetch'
import routes from '../routes'

import {
  SHOWS_URL,
  VENUES_URL,
} from '../data'

import './shows_list.css'

const hasDate = filter(prop('date'))

function ShowEntry({children, show}) {
  const {date, event, id, venue} = show
  const title = `#${id}: ${date}${event ? ` ${event}` : ''} @ ${venue.name} (${venue.location})`
  return <li>
    <Link to={routes.show.replace(':id', id)} title={title}>{children || date}</Link>
  </li>
}

const UNDEF = undefined

export default function ShowsList() {
  const [shows, setShows] = useState(UNDEF)
  const [venues, setVenues] = useState(UNDEF)
  useEffect(() => {
    parseWithCache(SHOWS_URL, (showData) => setShows(hasDate(showData)))
    parseWithCache(VENUES_URL, (venueData) => setVenues(venueData))
    // TODO change data stores to be object-based rather than array-based
  }, [])
  if (shows === UNDEF || venues === UNDEF) {
    return <p>Loading...</p>
  }
  const showsByYear = shows.reduce((acc, show) => {
    const [m, d, y] = show.date.split('/') // e.g. === ['1', '26', '2013']
    if (!acc[y]) acc[y] = {}
    const venue = find(propEq('id', show.venue_id))(venues)
    acc[y][`${m}/${d}`] = {
      ...show,
      venue
    }
    return acc
  }, {})
  return <ul className="showslist__years">
    {Object.entries(showsByYear).reverse().map(([year, showsInYear]) => {
      return <li className={`showslist__years--${year}`}>
        <h3>{year}</h3>
        <ul className="showslist__years__shows">
          {Object.entries(showsInYear).map(([monthAndDay, show]) => {
            return <li className={`showslist__years__shows__${monthAndDay}`}>
              <ShowEntry key={show.id} show={show}>{monthAndDay}</ShowEntry>
            </li>
          })}
        </ul>
      </li>
    })}
  </ul>
}
