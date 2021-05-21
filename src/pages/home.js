import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import loadable from '@loadable/component'

import Layout from "../components/layout"
import SEO from "../components/seo"

import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './home.css'

const LoadableTopicsList = loadable(() => import('../components/forum-topics.js'))

const IndexPage = ({pageContext: {shows, venues, songs}}) => {
  return <Layout className="homepage">
    <SEO title="JRAD setlists, teases, segues, recordings, forum" description="Joe Russo's Almost Dead setlists, teases, performance recordings, discussion forum" />

    <section className="homepage__forum">
      <h2>
        <a href="https://lot.almost-dead.net" title="JRAD Forum: The Lot"><img src="https://lot.almost-dead.net/uploads/default/original/1X/71ea69cde5d1aedbf81ce09bdd8acf299d582546.png" alt="The Lot (message board / forum)" style={{maxHeight:'1.7em',verticalAlign:'middle'}} /></a>
      </h2>
      <LoadableTopicsList />
    </section>

    <section className="homepage__songfinder">
      <h2>Find a song:</h2>
      <SongFinder songs={songs} />
    </section>

    <section className="homepage__links">
      <h2>Links:</h2>
      <ul>
        <li><Link to="/songs" title="All songs performed or teased by JRAD">All Songs Played or Teased</Link></li>
        <li><a href="https://lot.almost-dead.net/t/setlist-corrections/17" title="thread about Setlist corrections">corrections</a></li>
        <li><a href="https://lot.almost-dead.net/t/suggestions-for-the-main-site/18" title="thread about Suggestions">suggestions</a></li>
        <li><Link to="/about" title="About Almost-Dead.net">about the site</Link></li>
      </ul>
    </section>

    <section className="homepage__showsbyyear">
      <h1>Setlists, segues, teases, recordings, notes for each JRAD show:</h1>
      <ShowsByYear rawShows={shows} rawVenues={venues} />
    </section>

  </Layout>
}

export default IndexPage
