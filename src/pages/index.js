import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './index.css'


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
          <ul>
            <li><Link to="/guests" title="All guests who have performed with JRAD">Guests</Link></li>
            <li><Link to="/songs" title="All songs performed or teased by JRAD">Songs & Teases</Link></li>
            <li><Link to="/venues" title="All venues where JRAD has performed">Venues</Link></li>
          </ul>
        </li>
        <li className="homepage__links__meta">
          <Link to="/about" title="About Almost-Dead.net">About the site</Link>
        </li>
        <li className="homepage__links-offsite">
          offsite
          <ul>
            <li><a className="icon mastodon" href="https://shakedown.social/@AlmostDeadNet" title="Mastodon: @AlmostDeadNet@shakedown.social" rel="me" target="_blank"><kbd>@AlmostDeadNet@shakedown.social</kbd></a></li>
            <li><a className="icon github" href="https://github.com/alxndr/almost-dead-net" title="code on GitHub" target="_blank"><kbd>alxndr/almost-dead-net</kbd></a></li>
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

  </Layout>
}
