import React from 'react'
import { Link } from 'react-router-dom'

import routes from '../routes'

import './shows_by_year.css'

function ShowEntry({children, show}) {
  const {date, event, id, venue} = show
  const title = `#${id}: ${date}${event ? ` ${event}` : ''} @ ${venue.name} (${venue.location})`
  return <Link to={routes.show.replace(':id', id)} title={title}>{children || date}</Link>
}

export default function ShowsByYear({rawShows, rawVenues}) {
  const showsByYear = Object.values(rawShows).reduce((acc, show) => {
    const [m, d, y] = show.date.split('/') // e.g. === ['1', '26', '2013']
    if (!acc[y]) acc[y] = {}
    const venue = rawVenues[show.venue_id]
    acc[y][`${m}/${d}`] = {
      ...show,
      venue
    }
    return acc
  }, {})
  return <ul className="showsbyyear">
    {Object.entries(showsByYear).reverse().map(([year, showsInYear]) => {
      return <li className={`showsbyyear--${year}`} key={year}>
        <h3>{year}</h3>
        <ul className="showsbyyear__shows">
          {Object.entries(showsInYear).map(([monthAndDay, show]) => {
            return <li className={`showsbyyear__shows__${monthAndDay}`} key={monthAndDay}>
              <ShowEntry key={show.id} show={show}>{monthAndDay}</ShowEntry>
            </li>
          })}
        </ul>
      </li>
    })}
  </ul>
}
