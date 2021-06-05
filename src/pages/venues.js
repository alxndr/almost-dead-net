import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
import {groupBy} from 'ramda'
import slugify from 'slugify'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './venues.css'

function VenuesComponent({data: {
  allVenuesCsv: {nodes: allVenues}
}}) {
  const groupedByLocale = groupBy(
    (venueData) => venueData.location.includes(', ') ? venueData.location.split(', ')[1] : venueData.location,
    allVenues
  )

  return <Layout className="venues">
    <SEO
      title="JRAD — all venues"
      description="List of all venues that Joe Russo's Almost Dead has performed at to date"
    />

    <h1>All Venues</h1>

    <ul className="venues__list">
      {Object.entries(groupedByLocale).sort((localeA, localeB) => {
        if (localeA < localeB)
          return -1
        if (localeA > localeB)
          return 1
        return 0
      }).map(([locale, venueDataList]) => 
        <li key={locale}>
          <h3>{locale}</h3>
          <ul>
            {venueDataList.sort((locationA, locationB) => {
              if (locationA < locationB)
                return -1
              if (locationA > locationB)
                return 1
              return 0
            }).map((venueData) => <li key={venueData.id}>
              <h4>
                <Link to={`/venue/${venueData.id}-${slugify(venueData.name)}`}>
                  {venueData.location}: {venueData.name}
                </Link>
              </h4>
            </li>)}
          </ul>
        </li>)}
    </ul>

  </Layout>
}

// TODO: list number of shows at each venue
const VenuesPage = () => <StaticQuery
  query={graphql`
    query VenuesPageData {
      allVenuesCsv { nodes {
        id
        name
        location
      } }
    }
  `}
  render={(data) => <VenuesComponent data={data} />}
/>

export default VenuesPage
