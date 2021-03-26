import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

import './about.css'

export default function About() {
  return <Layout className="aboutPage">
    <h1>About Almost-Dead.net</h1>
    <p>In Memory of <Link to="/show/184">David Kay</Link>, creator of the <a href="https://docs.google.com/spreadsheets/d/1qxTKvLkiQgHycuC530OU3j-O5ggijHelXRXVjTiZLis/htmlview" target="_blank" rel="noopener noreferrer">JRAD-base spreadsheet</a>…</p>
    <p>This site is not officially affiliated with <a href="http://www.joerussosalmostdead.com/" target="_blank" rel="noopener">JRAD</a>.</p>
    <p>The content on this site is based on public information, with additional contributions from a variety of individuals.</p>
    <hr />
    <p>The site on <tt>almost-dead.net</tt> is powered by <a href="https://github.com/alxndr/almost-dead-net" target="_blank" rel="noopener noreferrer">some JavaScript</a> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>, hosted on GitHub Pages.</p>
    <p>The site on <tt>lot.almost-dead.net</tt> is <a href="https://lot.almost-dead.net/" title="JRAD Forum — The Lot">The Lot</a>, a forum powered by <a href="https://discourse.org" target="_blank" rel="noopener noreferrer">Discourse</a>, running on Google Cloud.</p>
    <p>The domain name is managed by NameCheap.</p>
  </Layout>
}
