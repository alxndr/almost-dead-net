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
      <li>links to Archive.org</li>
      <li>videos</li>
      <li>tease notations</li>
    </ul>
    </section>
}
