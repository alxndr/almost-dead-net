import React from 'react'
import {Link} from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

import './about.css'

export default function About() {
  return <Layout className="aboutPage">
    <SEO title="About the site" />
    <h1>About Almost-Dead.net</h1>
    <p>This site is not officially affiliated with <a href="http://www.joerussosalmostdead.com/" target="_blank" rel="noopener">JRAD</a>.</p>
    <hr />
    <p>In Memory of <Link to="/show/184">David Kay</Link>, creator of the <a href="https://docs.google.com/spreadsheets/d/1qxTKvLkiQgHycuC530OU3j-O5ggijHelXRXVjTiZLis/htmlview" target="_blank" rel="noopener noreferrer">JRAD-base spreadsheet</a>.</p>
    <p>Thanks to everyone on <a href="https://www.reddit.com/r/JRADs/" target="_blank" rel="noopener noreferrer">the JRADs subreddit</a> for participating in the "setlist threads" and calling teases!</p>
    <hr />
    <p>Special Thanks to <a href="https://archive.org/" target="_blank" rel="noopener">the Internet Archive</a> for preserving human knowledge and art, and the Taper Community for sharing their experiences!</p>
    <p>Thanks to Aaron Donovan for the walk-through of the parts of <a href="https://www.whitegum.com/aaroness.htm" target="_blank" rel="noopener">Terrapin Suite</a>.</p>
    <p>Thanks to <a href="http://www.deaddisc.com" target="_blank" rel="noopener">the GD Family Discography</a> for detailed information about the songs played by the Grateful Dead.</p>
    <hr />
    <p>The site on <tt>almost-dead.net</tt> is powered by <a href="https://github.com/alxndr/almost-dead-net" target="_blank" rel="noopener noreferrer">some JavaScript</a> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>, hosted on GitHub Pages.</p>
    <p>The site on <tt>lot.almost-dead.net</tt> is <a href="https://lot.almost-dead.net/" title="JRAD Forum — The Lot">The Lot</a>, a forum powered by <a href="https://discourse.org" target="_blank" rel="noopener noreferrer">Discourse</a>, running on Google Cloud.</p>
    <p>The domain name is managed by NameCheap.</p>
    <hr />
    <p>Black lives matter, Native lives matter!</p>
  </Layout>
}
