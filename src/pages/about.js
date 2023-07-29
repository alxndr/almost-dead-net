import React from 'react'
import {Link} from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

import './about.css'

export default function About() {
  return <Layout className="aboutPage">
    <SEO title="About the site" />

    <h1>About Almost-Dead.net</h1>
    <p>This site is not officially affiliated with <a href="http://www.joerussosalmostdead.com/" target="_blank" rel="noopener noreferrer">Joe Russo's Almost Dead</a>.</p>
    <p>It is inspired by fan-run sites such as Deadbase (RIP), <a href="http://phish.net" target="_blank" rel="noopener noreferrer">phish.net</a>, and <a href="http://brownbase.org" target="_blank" rel="noopener noreferrer">brownbase.org</a>.</p>
    <p>Corrections, suggestions, or complaints can be directed to the Mastodon account <a href="https://shakedown.social/@AlmostDeadNet" title="mastodon: @AlmostDeadNet@shakedown.social" target="_blank" rel="noopener noreferrer">@AlmostDeadNet@shakedown.social</a>.</p>

    <h1>❤️</h1>
    <p>In Memory of <Link to="/show/184">David Kay</Link>, creator of the <a href="https://docs.google.com/spreadsheets/d/1qxTKvLkiQgHycuC530OU3j-O5ggijHelXRXVjTiZLis/htmlview" target="_blank" rel="noopener noreferrer">JRAD-base spreadsheet</a>.</p>

    <h1>Thanks</h1>
    <p>Love and Thanks to Joe, Marco, Scott, Dave, Tom!! And all of their techs, and the touring team! And venue employees! And to Pete Shapiro for having this crazy idea!</p>
    <p>Thanks to Peter Costello, Eric McRoberts, and Aaron Gittleman for all your work on the audio at the shows themselves, and for the matrix recordings — they sound amazing!</p>
    <p>Thanks to everyone on <a href="https://www.reddit.com/r/JRADs/" target="_blank" rel="noopener noreferrer">the JRADs subreddit</a> for participating in the "setlist threads" and calling teases!</p>
    <p>Special Thanks to <a href="https://archive.org/" target="_blank" rel="noopener noreferrer">the Internet Archive</a> for preserving human knowledge and art, and the Taper Community for sharing their experiences!</p>
    <p>Thanks to <a href="http://www.deaddisc.com" target="_blank" rel="noopener noreferrer">the GD Family Discography</a> for detailed information about the songs played by the Grateful Dead.</p>
    <p>Thanks to Alex Allan for the <a href="https://www.whitegum.com/intro.htm" target="_blank" rel="noopener noreferrer">Grateful Dead Lyric &amp; Song Finder</a>.</p>
    <p>Thanks to Aaron Donovan for <a href="https://www.whitegum.com/aaroness.htm" target="_blank" rel="noopener noreferrer">the walk-through of the Terrapin suite</a>.</p>
    <p>Thanks to Rannygazoo for <a href="https://rannygazoodead.blogspot.com/2015/05/some-problems-with-nomenclature-1973.html" target="_blank" rel="noopener noreferrer">the dive into "Stronger Than Dirt" &amp; "Milking the Turkey"</a>.</p>

    <h1>Colophon</h1>
    <p>The site on <tt>almost-dead.net</tt> is powered by <a href="https://github.com/alxndr/almost-dead-net" target="_blank" rel="noopener noreferrer">some JavaScript</a> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>, hosted on GitHub Pages.</p>
    <p>The domain name is managed by NameCheap.</p>

    <h1>☮️🖤🌈</h1>
    <p>Black lives matter, Native lives matter!</p>
  </Layout>
}
