import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './index.css'

export default function Index() {
  return <Layout className="homepage">
    <SEO title="Almost-Dead.net" description="setlists for Joe Russo's Almost Dead, with teases and links to recordings" />

    <h1>JRAD Setlists</h1>

    <section className="homepage__songfinder">
      <h2>Find a song:</h2>
      {/*<SongFinder />*/}
    </section>

    <section className="homepage__links">
      <h2>Links:</h2>
      <ul>
        <li><em>New page!</em> <Link to="/songs" title="All songs performed or teased by JRAD">All Songs Played or Teased</Link></li>
        <li><a href="https://lot.almost-dead.net/c/meta/2" title="Meta category at The Lot">corrections & suggestions</a></li>
        <li><a href="/about" title="About Almost-Dead.net">about the site</a></li>
        <li><a href="https://lot.almost-dead.net" title="JRAD Forum: The Lot">forum: <img src="https://lot.almost-dead.net/uploads/default/original/1X/71ea69cde5d1aedbf81ce09bdd8acf299d582546.png" alt="The Lot (message board / forum)" style={{maxHeight:'1.7em',verticalAlign:'middle'}} /></a></li>
      </ul>
    </section>

    <section className="homepage__showsbyyear">
      <h2>Find a show's setlist, teases, segues, and more:</h2>
      <ShowsByYear />
    </section>

  </Layout>
}
