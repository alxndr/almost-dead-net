import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import './shows_by_year.css'

function ShowEntry({children, show}) {
  const {date, event, id, venue} = show
  let title = `#${id}: ${date}${event ? ` ${event}` : ''}`
  if (venue) {
    title = `${title} @ ${venue.name} (${venue.location})`
  } else
    console.debug(`No venue found for show #${id}`, show)
  return <Link to={`/show/${id}`} title={title}>{children || date}</Link>
}

export default function ShowsByYear() {
  const {
    allShowsCsv: {nodes: rawShows},
    allVenuesCsv: {nodes: rawVenues},
  } = useStaticQuery(graphql`
    query ShowsByYearData {
      allShowsCsv { nodes {
        date
        encore1
        encore2
        event
        id
        links
        notes
        num_recordings
        set1
        set2
        set3
        soundcheck
        tagline
        venue_id
      } }
      allVenuesCsv { nodes {
        id
        location
        name
      } }
    }
  `)
  const showsWithVenueByYear = rawShows.reduce((acc, show) => {
    const [m, d, y] = show.date.split('/') // e.g. === ['1', '26', '2013']
    const venueId = show.venue_id.toString()
    if (!acc[y])
      acc[y] = {}
    const venue = rawVenues.find(venue => venue && venue.id && venue.id.toString() === venueId)
    if (!venue)
      console.debug(`No venue found for show #${show.id}`, show)
    acc[y][`${m}/${d}`] = {
      ...show,
      venue
    }
    return acc
  }, {})
  return <ul className="showsbyyear">
    {Object.entries(showsWithVenueByYear).reverse().map(([year, showsInYear]) => {
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
