import React from 'react'

import ShowsList from '../components/shows_list'

import './home.css'

export default function Home(props) {
  return <section className="homepage">
    <h1>JRAD Setlists</h1>
    <p>Find a past show:</p>
    <ShowsList />
    <hr />
    <p>Coming eventually...</p>
    <ul>
      <li>easier navigation??</li>
      <li>teases!</li>
      <li>the rest of the setlists</li>
      <li>more links to Archive.org & Youtube</li>
      <li>fun stats</li>
    </ul>
    </section>
}
