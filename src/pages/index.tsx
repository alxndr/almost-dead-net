import * as React from 'react'
import { Link } from 'gatsby'
import type { HeadFC } from 'gatsby'

import Layout from '../components/layout'

import './index.css'

const IndexPage = () => {
  return (<Layout>
    <main className="homepage">

      <section className="homepage__links">
        <h1>Links</h1>
        <ul>
          <li className="homepage__links-all">
            <h2>browse</h2>
            <ul>
              <li><Link to="/songs" title="All songs performed or teased by JRAD">Songs & Teases</Link></li>
              <li><Link to="/guests" title="All guests who have performed with JRAD">Guests</Link></li>
              <li><Link to="/venues" title="All venues where JRAD has performed">Venues</Link></li>
              <li><Link to="https://lot.almost-dead.net" title="JRAD Forum — The Lot">Forum</Link></li>
            </ul>
          </li>
          <li className="homepage__links__meta">
            <h2>meta</h2>
            <ul>
              <li><Link to="/about" title="About Almost-Dead.net">About the site</Link></li>
              <li><a href="https://lot.almost-dead.net/t/setlist-corrections/17" title="forum discussion about Setlist corrections">Report an error</a></li>
              <li><a href="https://lot.almost-dead.net/t/suggestions-for-the-main-site/18" title="forum discussion about Suggestions">Got a suggestion?</a></li>
            </ul>
          </li>
          <li className="homepage__links-offsite">
            <h2>offsite</h2>
            <ul>
              <li><a className="icon twitter" href="https://twitter.com/AlmostDeadNet" title="@AlmostDeadNet on Twitter" target="_blank"><kbd>@AlmostDeadNet</kbd></a></li>
              <li><a className="icon github" href="https://github.com/alxndr/almost-dead-net" title="code repo on GitHub" target="_blank"><kbd>alxndr/almost-dead-net</kbd></a></li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="homepage__showsbyyear">
        <h1>JRAD Setlists by date</h1>
        {/*<ShowsByYear />*/}
      </section>

      <section className="homepage__songfinder">
        <h1>Find a song</h1>
        {/*<SongFinder />*/}
      </section>

      <section className="homepage__forum">
        <h1>
          <a href="https://lot.almost-dead.net" title="JRAD Forum — The Lot"><img src="https://i.imgur.com/Qi2NhJO.png" alt="logo for The Lot (JRAD message board / forum)" style={{maxHeight:'1.7em',verticalAlign:'middle'}} /></a>
        </h1>
        {/*<LoadableTopicsList />*/}
      </section>

    </main>
  </Layout>)
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Almost-Dead.net — JRAD setlists with teases, segues, notes, recordings, forum</title>
</>
