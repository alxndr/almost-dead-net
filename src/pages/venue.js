import React from 'react'
import {Link} from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

import './venue.css'

export default function VenuePage({pageContext: {venue, shows}}) {
  if (!venue) {
    return false
  }
  return <Layout className="venuepage">
    <SEO
      title={`JRAD shows at ${venue.name}, ${venue.location}`}
    />
    <h1>{venue.name}</h1>
    <p>{venue.location}</p>
    <h2>{shows.length} Show{shows.length !== 1 && 's'}</h2>
    <ul>
      {shows.map((show) =>
        <li>
          <Link to={`/show/${show.id}`}>{show.date}</Link>
        </li>
      )}
    </ul>
  </Layout>
}
