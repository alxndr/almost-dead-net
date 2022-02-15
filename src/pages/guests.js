import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
import {groupBy} from 'ramda'
import slugify from 'slugify'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {pluralize} from '../helpers/string_helpers'

// import './guests.css'

function sortGuests({name: nameA}, {name: nameB}) {
  // split out last name..
  if (nameA < nameB)
    return -1
  if (nameA > nameB)
    return 1
  return 0
}

function GuestsComponent({data: {
  allShowsCsv: {nodes: allShows},
  allGuestsCsv: {nodes: allGuests},
}}) {
  const groupedByLocale = groupBy(
    (guestData) => guestData.location.replace(' (Canada)', '') && guestData.location.includes(', ') ? guestData.location.split(', ')[1] : guestData.location,
    allGuests
  )

  return <Layout className="guests">
    <SEO
      title="JRAD — Guests"
      description="All guests who have performed with Joe Russo's Almost Dead"
    />

    <h1>Guests</h1>

    <ul className="guests__list">
      {Object.entries(groupedByLocale).sort(sortLocales).map(([locale, guestDataList]) => {
        const cleanLocale = locale.replace(' (Canada)', '')
        return <li key={cleanLocale}>
          <h3>{LOCALE_MAPPING[cleanLocale] ? LOCALE_MAPPING[cleanLocale] : cleanLocale}</h3>
          <ul>
            {guestDataList.sort(sortGuests).map((guestData) => <li key={guestData.id}>
              <h4>
                <Link to={`/guest/${guestData.id}-${slugify(guestData.name)}`}>
                  {guestData.location}:
                  {' '}
                  {guestData.name}
                  {' '}
                  ({pluralize(allShows.filter((showData) => showData.guest_id === guestData.id).length, 'show')})
                </Link>
              </h4>
            </li>)}
          </ul>
        </li>
      })}
    </ul>

  </Layout>
}

const GuestsPage = () => <StaticQuery
  query={graphql`
    query GuestsPageData {
      allShowsCsv { nodes {
        id
      } }
      allGuestsCsv { nodes {
        id
        name
        shows
        instrument
      } }
    }
  `}
  render={(data) => <GuestsComponent data={data} />}
/>

export default GuestsPage
