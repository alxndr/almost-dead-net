import React, {useEffect} from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './home.css'

function isDebugMode() {
  return global.window &&
    global.window.location.hash === '#debug'
}

const IndexPage = ({pageContext: {shows, venues, songs}}) => {
  return <Layout className="homepage">
    <Helmet>
      <script src="https://lot.almost-dead.net/javascripts/embed-topics.js" type="text/javascript"></script>
    </Helmet>

    <SEO title="Almost-Dead.net" description="Joe Russo's Almost Dead setlists, teases, performance recordings, discussion forum" />

    <h1>JRAD forum &amp; setlists with teases &amp; segues</h1>

    <section className="homepage__forum">
      <h2>Forum</h2>
      <a href="https://lot.almost-dead.net" title="JRAD Forum: The Lot"><img src="https://lot.almost-dead.net/uploads/default/original/1X/71ea69cde5d1aedbf81ce09bdd8acf299d582546.png" alt="The Lot (message board / forum)" style={{maxHeight:'1.7em',verticalAlign:'middle'}} /></a>
      <d-topics-list discourse-url="https://lot.almost-dead.net" per-page="5" status="open"></d-topics-list>
    </section>

    <section className="homepage__songfinder">
      <h2>Find a song:</h2>
      <SongFinder songs={songs} />
    </section>

    <section className="homepage__links">
      <h2>Links:</h2>
      <ul>
        <li><Link to="/songs" title="All songs performed or teased by JRAD">All Songs Played or Teased</Link></li>
        <li><a href="https://lot.almost-dead.net/c/meta/2" title="Meta category at The Lot">corrections & suggestions</a></li>
        <li><a href="/about" title="About Almost-Dead.net">about the site</a></li>
      </ul>
    </section>

    <section className="homepage__showsbyyear">
      <h2>Find a show:</h2>
      <ShowsByYear rawShows={shows} rawVenues={venues} />
    </section>

  </Layout>
}

export default IndexPage
