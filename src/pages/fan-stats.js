import React, {useEffect, useState} from 'react'
import {graphql, Link} from 'gatsby'
import {find, propEq, uniq, __} from 'ramda'
import slugify from 'slugify'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {pluralize} from '../helpers/string_helpers'

import './fan-stats.css'

const UsernameForm = () => <form action="/fan-stats">
  <input type="text" name="username" placeholder="your username on The Lot" size="30" />
  <button>generate stats</button>
</form>

const LinkedUser = ({username}) => <a href={`https://lot.almost-dead.net/u/${username}/summary`}>@{username}</a>

const PageTitle = ({username}) => {
  if (username) {
    return <>Fan Stats for <LinkedUser username={username} /></>
  }
  return 'Fan Stats'
}

const venueURL = ({id, name}) => `/venue/${id}-${slugify(name)}`

const FanStats = ({user, shows}) => {
  const showIDs = Object.keys(shows)
  const venues = uniq(Object.values(shows).map(({venue}) => venue))

  return <>
    <p><LinkedUser username={user.username} /> has seen {showIDs.length} shows at {pluralize(venues.length, 'venue')}.</p>

    <h2>Shows</h2>
    <ol>
      {showIDs.map((showID) => {
        const showData = shows[showID]
        return <li>
          <Link to={`/show/${showID}`}>{showData.date}</Link>
          {' at '}
          <Link to={venueURL(showData.venue)}>{showData.venue.name}, {showData.venue.location}</Link>
        </li>
      })}
    </ol>

    <h2>Venues</h2>
    <ol>
      {venues.map((venue) => <li><Link to={venueURL(venue)}>{venue.name}, {venue.location}</Link></li>)}
    </ol>
  </>
}

export default function FanStatsPage({location, data}) {
  const usernameRaw = new URLSearchParams(location.search).get('username')

  const [userJson, setUserJson] = useState()
  const [showsData, setShowsData] = useState()

  useEffect(() => {
    if (usernameRaw) {
      fetch(`https://lot.almost-dead.net/u/${usernameRaw}.json`)
        .then((response) => response.json())
        .then((json) => {
          global.console.log(json)
          if (json?.user) {
            setUserJson({
              user: json.user,
              shows: json.user.user_fields[1]?.length
                ? JSON.parse(json.user.user_fields[1])
                : [],
            })
          }
        })
    }
  }, [usernameRaw])

  useEffect(() => {
    if (userJson?.shows?.length) {
      const findShow = find(__, shows)
      const findVenue = find(__, venues)
      setShowsData(userJson.shows.reduce((showsData, showDateString) => {
        const showDMYYYY = showDateString.split(' ')[0].replace(/\/(\d{2})$/, '/20$1')
        const showData = findShow(propEq('date', showDMYYYY))
        if (showData?.id) {
          const venue = findVenue(propEq('id', showData.venue_id))
          return {
            ...showsData,
            [showData.id]: {
              ...showData,
              venue,
            },
          }
        }
        return showsData
      }, {}))
    }
  }, [userJson])

  const {
    allShowsCsv: {nodes: shows},
    allVenuesCsv: {nodes: venues},
  } = data

  return <Layout className="fanstatspage">
    <SEO title="JRAD Fan Stats" />
    <h1><PageTitle username={userJson?.user?.username} /></h1>
    {userJson?.user
      ? showsData
        ? Object.keys(showsData).length
          ? <FanStats shows={showsData} user={userJson.user} />
          : <><p>No shows found!</p><UsernameForm/></>
        : usernameRaw
          ? <p>Loading...</p>
          : <UsernameForm/>
      : <><p>Uh oh, error fetching userJson.</p><UsernameForm/></>
    }
  </Layout>
}

export const query = graphql`
  query FanStatsData {
    allVenuesCsv {
      nodes {
        id
        name
        location
        capacity
        generic_name
        tagname
      }
    }
    allShowsCsv {
      nodes {
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
      }
    }
  }
`
