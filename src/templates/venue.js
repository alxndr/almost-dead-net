import React from 'react'
import {graphql, Link} from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

import {pluralize} from '../helpers/string_helpers'

import './venue.css'

export default function Venue({data}) {
  const {venuesCsv: venue, allShowsCsv: {nodes: shows}} = data
  if (!venue) {
    return false
  }
  return <Layout className="venuepage">
    <SEO
      title={`JRAD shows at ${venue.name}, ${venue.location}`}
    />
    <h1>{venue.name}</h1>
    <p>{venue.location}</p>
    <h2>{pluralize(shows.length, 'Show')}</h2>
    <ul>
      {shows.map((show) =>
        <li>
          <Link to={`/show/${show.id}`}>{show.date}</Link>
        </li>
      )}
    </ul>
  </Layout>
}

export const query = graphql`
  query($venueId: String!) {
    venuesCsv(id: {eq: $venueId}) {
      id
      location
      name
    }
    allShowsCsv(filter: {venue_id: {eq: $venueId}}) {
      nodes {
        id
        date
      }
    }
  }
`
