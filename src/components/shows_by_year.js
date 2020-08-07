import React from 'react'
import { Link } from 'react-router-dom'

import routes from '../routes'

import './shows_by_year.css'

function ShowEntry({children, show}) {
  const {date, event, id, venue} = show
  const title = `#${id}: ${date}${event ? ` ${event}` : ''} @ ${venue.name} (${venue.location})`
  return <Link to={routes.show.replace(':id', id)} title={title}>{children || date}</Link>
}

export default function ShowsList({showsObject}) {
  return <ul className="showslist__years">
    {Object.entries(showsObject).reverse().map(([year, showsInYear]) => {
      return <li className={`showslist__years--${year}`} key={year}>
        <h3>{year}</h3>
        <ul className="showslist__years__shows">
          {Object.entries(showsInYear).map(([monthAndDay, show]) => {
            return <li className={`showslist__years__shows__${monthAndDay}`} key={monthAndDay}>
              <ShowEntry key={show.id} show={show}>{monthAndDay}</ShowEntry>
            </li>
          })}
        </ul>
      </li>
    })}
  </ul>
}
