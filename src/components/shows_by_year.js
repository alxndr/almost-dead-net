import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import {Link, graphql, useStaticQuery} from 'gatsby'

import './shows_by_year.css'

function ShowEntry({children, show}) {
  const {date, event, jsonId, venue} = show
  let title = `#${jsonId}: ${date}${event ? ` ${event}` : ''}`
  if (venue) {
    title = `${title} @ ${venue.name} (${venue.location})`
  } else
    console.debug(`No venue found for show #${jsonId}`, show)
  return <Link to={`/show/${jsonId}`} title={title}>{children || date}</Link>
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
        jsonId
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
        jsonId
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
    const venue = rawVenues.find(venue => venue?.jsonId?.toString?.() === venueId)
    if (!venue)
      console.debug(`No venue found for show #${show.jsonId}`, show)
    acc[y][`${m}/${d}`] = {
      ...show,
      venue
    }
    return acc
  }, {})
  return <Tabs className="showsbyyear react-tabs">
    <TabList>
      {Object.keys(showsWithVenueByYear).reverse().map(year =>
        <Tab><h3>{year}</h3></Tab>
      )}
    </TabList>
    {Object.entries(showsWithVenueByYear).reverse().map(([year, showsInYear]) =>
      <TabPanel data-year={year}>
        <ul className="showsbyyear__shows">
          {Object.entries(showsInYear).map(([monthAndDay, show]) =>
            <li className={`showsbyyear__shows__${monthAndDay}`} key={monthAndDay}>
              <ShowEntry key={show.jsonId} show={show}>{monthAndDay}</ShowEntry>
            </li>
          )}
        </ul>
      </TabPanel>
    )}
  </Tabs>
}
