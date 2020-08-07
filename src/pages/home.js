import React, {useState, useEffect} from 'react'

import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import {
  SHOWS_URL,
  VENUES_URL,
} from '../data'
import {parseIntoObjectWithCache} from '../fetch'

import './home.css'

const UNDEF = undefined

export default function Home(props) {
  const [shows, setShows] = useState(UNDEF)
  const [venues, setVenues] = useState(UNDEF)
  useEffect(() => {
    // TODO pull this data at the page(?) level, prepare & then pass in the array/object of shows as a prop
    parseIntoObjectWithCache(SHOWS_URL, (showData) => setShows(showData))
    parseIntoObjectWithCache(VENUES_URL, (venueData) => setVenues(venueData))
  }, [])
  if (shows === UNDEF || venues === UNDEF) {
    return <p>Loading...</p>
  }
  const showsByYear = Object.values(shows).reduce((acc, show) => {
    const [m, d, y] = show.date.split('/') // e.g. === ['1', '26', '2013']
    if (!acc[y]) acc[y] = {}
    const venue = venues[show.venue_id]
    acc[y][`${m}/${d}`] = {
      ...show,
      venue
    }
    return acc
  }, {})
  return <section className="homepage">
    <h1>JRAD Setlists</h1>
    <p>Find a song:</p>
    <SongFinder />
    <hr />
    <p>Find a past show:</p>
    <ShowsByYear showsObject={showsByYear} />
    <hr />
    <p>Coming eventually...</p>
    <ul>
      <li>easier navigation??</li>
      <li>more teases!</li>
      <li>more links to Archive.org & Youtube</li>
      <li>fun stats</li>
    </ul>
    </section>
}
