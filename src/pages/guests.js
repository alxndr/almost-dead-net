import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
import {groupBy, find, propEq} from 'ramda'
import slugify from 'slugify'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {pluralize} from '../helpers/string_helpers'

import './guests.css'

function sortGuests({name: nameA, sortVal: sortA}, {name: nameB, sortVal: sortB}) {
  const sortNameA = sortA || nameA.split(/\s+/).slice(-1)[0]
  const sortNameB = sortB || nameB.split(/\s+/).slice(-1)[0]
  if (sortNameA < sortNameB)
    return -1
  if (sortNameA > sortNameB)
    return 1
  return 0
}

function sortNumerical(strA, strB) {
  return Number(strA) - Number(strB)
}

function GuestsComponent({data: {
  allShowsCsv: {nodes: allShows},
  allGuestsCsv: {nodes: allGuests},
}}) {
  const guests = allGuests.sort(sortGuests)
  const findShowById = (inputIdStr) => allShows.find(({id: idStr}) => inputIdStr === idStr)
  return <Layout className="guests">
    <SEO
      title="JRAD — Guests"
      description="All guests who have performed with Joe Russo's Almost Dead"
    />

    <h1>Guests</h1>

    <ul className="guests__list">
      {guests.map((guest) =>
        <li key={guest.id}>
          <h2>{guest.name}
            <span class="guest-instrument">{guest.instrument}</span>
          </h2>
          <ul>
            {guest.shows.split(':').sort(sortNumerical).map((showId) => {
              const show = findShowById(String(showId)) //|| throw new Error(`Unrecognized showId`, showId)
              if (show)
                return <li key={showId}>
                  <Link to={`/show/${showId}`}>{show.tagline}</Link>
                </li>
              return false
            })}
          </ul>
        </li>
      )}
    </ul>

  </Layout>
}

const GuestsPage = () => <StaticQuery
  query={graphql`
    query GuestsPageData {
      allShowsCsv { nodes {
        id
        tagline
      } }
      allGuestsCsv { nodes {
        id
        instrument
        name
        shows
        sortVal
      } }
    }
  `}
  render={(data) => <GuestsComponent data={data} />}
/>

export default GuestsPage
