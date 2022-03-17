import React from "react"
import {Link} from "gatsby"
import loadable from '@loadable/component'

import Layout from "../components/layout"
import SEO from "../components/seo"

import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './index.css'

const LoadableTopicsList = loadable(() => import('../components/forum-topics.js'))

export default function Index() {
  return <Layout className="homepage">
    <SEO
      title="JRAD setlists, teases, segues, recordings, forum"
      description="Joe Russo's Almost Dead setlists, teases, performance recordings, discussion forum"
    />

    <section className="homepage__links">
      <h1>Links</h1>
      <ul>
        <li className="homepage__links-all">
          all…
          <ul>
            <li><Link to="/guests" title="All guests who have performed with JRAD" className="new">Guests</Link></li>
            <li><Link to="/songs" title="All songs performed or teased by JRAD">Songs & Teases</Link></li>
            <li><Link to="/venues" title="All venues where JRAD has performed">Venues</Link></li>
          </ul>
        </li>
        <li className="homepage__links__meta">
          <Link to="/about" title="About Almost-Dead.net">About the site</Link>
          <ul>
            <li><a href="https://lot.almost-dead.net/t/setlist-corrections/17" title="forum discussion about Setlist corrections">errors?</a></li>
            <li><a href="https://lot.almost-dead.net/t/suggestions-for-the-main-site/18" title="forum discussion about Suggestions">suggestions?</a></li>
          </ul>
        </li>
        <li className="homepage__links-offsite">
          elsewhere
          <ul>
            <li><a className="icon twitter" href="https://twitter.com/AlmostDeadNet" title="@AlmostDeadNet on Twitter" target="_blank"><kbd>@AlmostDeadNet</kbd></a></li>
            <li><a className="icon github" href="https://github.com/alxndr/almost-dead-net" title="code repo on GitHub" target="_blank"><kbd>alxndr/almost-dead-net</kbd></a></li>
          </ul>
        </li>
      </ul>
    </section>

    <section className="homepage__showsbyyear">
      <h1>JRAD Setlists by date</h1>
      <ShowsByYear />
    </section>

    <section className="homepage__songfinder">
      <h1>Find a song</h1>
      <SongFinder />
    </section>

    <section className="homepage__forum">
      <h1>
        <a href="https://lot.almost-dead.net" title="JRAD Forum, aka The Lot"><img src="https://i.imgur.com/Qi2NhJO.png" alt="The Lot (message board / forum)" style={{maxHeight:'1.7em',verticalAlign:'middle'}} /></a>
      </h1>
      <LoadableTopicsList />
    </section>

  </Layout>
}
