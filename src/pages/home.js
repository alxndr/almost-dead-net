import React from 'react'

import ShowsList from '../components/shows_list'

export default function Home(props) {
  return <>
    <h1>Almost-Dead.net</h1>
    <p>JRAD setlists:</p>
    <ShowsList />
    <hr />
    <p>Coming eventually...</p>
    <ul>
      <li>links to Archive.org</li>
      <li>videos</li>
      <li>tease notations</li>
    </ul>
  </>;
}
