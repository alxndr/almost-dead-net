import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
import {groupBy} from 'ramda'
import slugify from 'slugify'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {pluralize} from '../helpers/string_helpers'

import './venues.css'

const LOCALE_MAPPING = {
  AB: 'Alberta',
  AK: 'Alaska',
  AL: 'Alabama',
  AR: 'Arkansas',
  AS: 'American Samoa',
  AZ: 'Arizona',
  BC: 'British Columbia',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DC: 'District of Columbia',
  DE: 'Delaware',
  FL: 'Florida',
  FM: 'Micronesia',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  IA: 'Iowa',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  MA: 'Massachusetts',
  MB: 'Manitoba',
  MD: 'Maryland',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MI: 'Michigan',
  MN: 'Minnesota',
  MO: 'Missouri',
  MP: 'Northern Mariana Islands',
  MS: 'Mississippi',
  MT: 'Montana',
  NB: 'New Brunswick',
  NC: 'North Carolina',
  ND: 'North Dakota',
  NE: 'Nebraska',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NL: 'Newfoundland and Labrador',
  NM: 'New Mexico',
  NS: 'Nova Scotia',
  NT: 'Northwest Territories',
  NU: 'Nunavut',
  NV: 'Nevada',
  NY: 'New York',
  OH: 'Ohio',
  OK: 'Oklahoma',
  ON: 'Ontario',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  PE: 'Prince Edward Island',
  PR: 'Puerto Rico',
  PW: 'Palau',
  QC: 'Quebec',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  SK: 'Saskatchewan',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VA: 'Virginia',
  VI: 'Virgin Islands',
  VT: 'Vermont',
  WA: 'Washington',
  WI: 'Wisconsin',
  WV: 'West Virginia',
  WY: 'Wyoming',
  YT: 'Yukon',
}

function sortLocales([localeA], [localeB]) {
  const cleanLocaleA = localeA.replace(' (Canada)', '')
  const cleanLocaleB = localeB.replace(' (Canada)', '')
  const locA = LOCALE_MAPPING[cleanLocaleA] ? LOCALE_MAPPING[cleanLocaleA] : cleanLocaleA
  const locB = LOCALE_MAPPING[cleanLocaleB] ? LOCALE_MAPPING[cleanLocaleB] : cleanLocaleB
  if (locA < locB)
    return -1
  if (locA > locB)
    return 1
  return 0
}

function sortVenues({location: locationA}, {location: locationB}) {
  if (locationA < locationB)
    return -1
  if (locationA > locationB)
    return 1
  return 0
}

function VenuesComponent({data: {
  allShowsCsv: {nodes: allShows},
  allVenuesCsv: {nodes: allVenues},
}}) {
  const groupedByLocale = groupBy(
    (venueData) => venueData.location.replace(' (Canada)', '') && venueData.location.includes(', ') ? venueData.location.split(', ')[1] : venueData.location,
    allVenues
  )

  return <Layout className="venues">
    <SEO
      title="JRAD — all venues"
      description="List of all venues that Joe Russo's Almost Dead has performed at to date"
    />

    <h1>All Venues</h1>

    <ul className="venues__list">
      {Object.entries(groupedByLocale).sort(sortLocales).map(([locale, venueDataList]) => {
        const cleanLocale = locale.replace(' (Canada)', '')
        return <li key={cleanLocale}>
          <h3>{LOCALE_MAPPING[cleanLocale] ? LOCALE_MAPPING[cleanLocale] : cleanLocale}</h3>
          <ul>
            {venueDataList.sort(sortVenues).map((venueData) => <li key={venueData.id}>
              <h4>
                <Link to={`/venue/${venueData.id}-${slugify(venueData.name)}`}>
                  {venueData.location}:
                  {' '}
                  {venueData.name}
                  {' '}
                  ({pluralize(allShows.filter((showData) => showData.venue_id === venueData.id).length, 'show')})
                </Link>
              </h4>
            </li>)}
          </ul>
        </li>
      })}
    </ul>

  </Layout>
}

const VenuesPage = () => <StaticQuery
  query={graphql`
    query VenuesPageData {
      allShowsCsv { nodes {
        id
        venue_id
      } }
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
