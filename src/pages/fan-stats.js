import React, {useEffect, useState} from 'react'
import {graphql, Link} from 'gatsby'
import {find, propEq, sort, uniq, uniqBy, __} from 'ramda'
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
    return <><LinkedUser username={username} />'s Fan Stats</>
  }
  return 'Fan Stats'
}

const venueURL = ({id, name}) => `/venue/${id}-${slugify(name)}`

const FanStats = ({user, shows, songs}) => {
  const showIDs = Object.keys(shows)
  const songIDs = Object.keys(songs)
  const venues = uniq(Object.values(shows).map(({venue}) => venue))
  const uniqSongs = uniqBy(({song_id}) => song_id, songs)
  global.console.log({uniqSongs, songs})

  return <>
    <p><LinkedUser username={user.username} /> was at {pluralize(showIDs.length, 'show')} across {pluralize(venues.length, 'venue')}. They've heard {pluralize(uniqSongs.length, 'different song')}!</p>

    <h2>Shows</h2>
    <ol>
      {sort((a, b) => a - b, showIDs).map((showID) => {
        const showData = shows[showID]
        return <li key={showID}>
          <Link to={`/show/${showID}`}>{showData.date}</Link>
          {' at '}
          <Link to={venueURL(showData.venue)}>{showData.venue.name}, {showData.venue.location}</Link>
        </li>
      })}
    </ol>

    <h2>Venues</h2>
    <ol>
      {venues.map((venue) => <li key={venue.id}><Link to={venueURL(venue)}>{venue.name}, {venue.location}</Link></li>)}
    </ol>

    <h2>Songs</h2>
    <ol>
      {uniqSongs.map(({song_id, song_name}) => <li key={song_id}><Link to={`/song/${song_id}`}>{song_name}</Link></li>)}
    </ol>
  </>
}

export default function FanStatsPage({location, data}) {
  const usernameRaw = new URLSearchParams(location.search).get('username')
  const [userJson, setUserJson] = useState()
  const [showsData, setShowsData] = useState()
  const [songsData, setSongsData] = useState()
  useEffect(() => {
    if (usernameRaw) {
      fetch(`https://lot.almost-dead.net/u/${usernameRaw}.json`)
        .then((response) => response.json())
        .then((json) => {
          if (json?.user) {
            global.console.log(json.user, json.user.user_fields[1])
            setUserJson({
              user: json.user,
              shows: json.user.user_fields[1]
                ? JSON.parse(json.user.user_fields[1]) // TODO This will throw if the field is invalid JSON (which happens...)
                : [],
            })
          }
        })
    }
  }, [usernameRaw])

  const {
    allSetsCsv: {nodes: allSets},
    allSongperformancesCsv: {nodes: allSongPerfs},
    allShowsCsv: {nodes: allShows},
    allVenuesCsv: {nodes: allVenues},
  } = data
  const findSongPerf = find(__, allSongPerfs)
  const findSet = find(__, allSets)
  const findShow = find(__, allShows)
  const findVenue = find(__, allVenues)

  useEffect(() => {
    if (userJson?.shows) {
      const shows = userJson.shows.reduce((showsData, showDateString) => {
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
      }, {})
      setShowsData(shows)

      global.console.log({allSongPerfs})
      const songsData = Object.values(shows)
        .reduce((setIDs, show) => setIDs.concat([show.set1, show.set2, show.set3, show.encore1, show.encore2].filter((id) => Boolean(id))), [])
        // now it is an array of set ID strings...
        .map((setID) => findSet(propEq('id', setID)))
        .flatMap(({setlist}) => String(setlist).split(':'))
        // now it is an array of songperf ID strings
        .map((songPerfID) => findSongPerf(propEq('id', songPerfID)))
        // now it is an array of songperf objs
      global.console.log({songsData})
      setSongsData(songsData)

    }
  }, [userJson])

  return <Layout className="fanstatspage">
    <SEO title="JRAD Fan Stats" />
    <h1><PageTitle username={userJson?.user?.username} /></h1>
    {usernameRaw
      ? userJson?.user
        ? showsData
          ? Object.keys(showsData).length
            ? <FanStats shows={showsData} songs={songsData} user={userJson.user} />
            : <><p>No shows found! (Have you entered them in <a href="https://lot.almost-dead.net/my/preferences/profile">your account preferences on The Lot</a>?)</p><UsernameForm/></>
          : <p>Reticulating splines...</p>
        : userJson?.error
          ? <><p>Uh oh, error fetching data.</p><UsernameForm/></>
          : <p>Loading...</p>
      : <UsernameForm/>
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
    allSetsCsv {
      nodes {
        id
        setlist
      }
    }
    allSongperformancesCsv {
      nodes {
        id
        set_id
        song_id
        song_name
      }
    }
  }
`
