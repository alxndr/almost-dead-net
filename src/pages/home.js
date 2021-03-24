import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './home.css'

const IndexPage = ({pageContext: {shows, venues, songs}}) => (
  <Layout className="homepage">
    <SEO title="Home" />
    <h1>JRAD Setlists</h1>
    <section className="homepage__links">
      <p>Links:</p>
      <ul>
        <li><a href="https://lot.almost-dead.net" title="JRAD Forum: The Lot">forum: <img src="https://lot.almost-dead.net/uploads/default/original/1X/71ea69cde5d1aedbf81ce09bdd8acf299d582546.png" alt="The Lot (message board / forum)" style={{maxHeight:'2em',verticalAlign:'middle'}} /></a></li>
        <li><a href="/about" title="About Almost-Dead.net">about the site</a></li>
        <li><a href="https://lot.almost-dead.net/c/meta/2" title="Meta category at The Lot">corrections & suggestions</a></li>
      </ul>
    </section>
    <section className="homepage__songfinder">
      <p>Find a song:</p>
      <SongFinder songs={songs} />
    </section>
    <section className="homepage__showsbyyear">
      <p>Pick a date to view the setlist and/or notes:</p>
      <ShowsByYear rawShows={shows} rawVenues={venues} />
    </section>
  </Layout>
)

export default IndexPage
