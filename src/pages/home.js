import React from 'react'

import ShowsList from '../components/shows_list'

import './home.css'

export default function Home(props) {
  return <section className="homepage">
    <h1>JRAD Setlists</h1>
    <ShowsList />
    <hr />
    <p>Coming eventually...</p>
    <ul>
      <li>more setlists</li>
      <li>more links to Archive.org & Youtube</li>
    </ul>
    </section>
}
