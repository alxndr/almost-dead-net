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
      title="JRAD Info Database — setlists, recordings, teases, guests, songs, and segues"
      description="Comprehensive resource for the setlist of every Joe Russo's Almost Dead (JRAD) concert, with links to all known recordings plus notes for individual teases, guest sit-ins, every song played, and the venues where the band has performed."
    />

    <section className="homepage__banner">
      <p>
        <span><a href="https://www.jambase.com/article/grateful-dead-bassist-phil-lesh-obituary" title="obit on JamBase" target="_blank" referrer="noopener">RIP</a> <a href="https://www.instagram.com/p/DBjvWcHPbQB/" title="Instagram @phillesh" target="_blank" referrer="noopener">Phil Lesh</a>...</span>
        thank you for all the music
        <span>❤️🧡💛💚🩵💙💜🩷🤎🖤</span>
      </p>
    </section>

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
      <h1 style={{width:'77%'}}>Find <abbr title="Joe Russo's Almost Dead">JRAD</abbr> Setlist by date</h1>
      <ShowsByYear />
    </section>

    <section className="homepage__songfinder">
      <h1>Find a song</h1>
      <SongFinder />
      <p style={{maxWidth:'25rem',margin:'1em auto',fontSize:'0.9em'}}>Almost-Dead.net tracks every setlist of every <a href="http://www.joerussosalmostdead.com" title="official site of Joe Russo's Almost Dead" target="_blank" style={{fontWidth:'bold'}}>Joe Russo's Almost Dead</a> concert — noting each tease within each song, with links to all the recordings available to share online. Search for a song by title, songwriter, or the band / performer who made it famous, and find when and where <abbr title="Joe Russo's Almost Dead">JRAD</abbr> has played or teased it, then listen for yourself!</p>
    </section>

  </Layout>
}
