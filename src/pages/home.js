import React from 'react'

import SongFinder from '../components/song_finder'
import ShowsList from '../components/shows_list'

import './home.css'

export default function Home(props) {
  return <section className="homepage">
    <h1>JRAD Setlists</h1>
    <p>Find a song:</p>
    <SongFinder />
    <hr />
    <p>Find a past show:</p>
    <ShowsList />
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
