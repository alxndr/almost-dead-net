import React from 'react'

//import SongFinder from '../components/song_finder'
import ShowsByYear from '../components/shows_by_year'

import './home.css'

export default function Home({ pageContext: { shows, venues } }) {
  return <article className="homepage">
    <h1>Almost-Dead.net — JRAD Setlists, Forum, and more!</h1>
    <section className="homepage__news">
      <p><em>New!!</em> visit <a href="//lot.almost-dead.net" title="JRAD Forum: The Lot" style={{fontWeight:'bold'}}>The Lot</a> to discuss all things Joe Russo's Almost Dead!</p>
      <p>Coming eventually...</p>
      <ul>
        <li>easier navigation??</li>
        <li>more teases!</li>
        <li>fun stats</li>
        <li><a href="https://lot.almost-dead.net/t/suggestions-for-the-main-site/18" title="leave a suggestion">your suggestions!</a></li>
      </ul>
    </section>
    <section className="homepage__songfinder">
      <p>Find a song:</p>
      {/*<SongFinder />*/}
    </section>
    {shows && venues && <section className="homepage__showsbyyear">
      <p>Pick a date to view the setlist and/or notes:</p>
      <ShowsByYear rawShows={shows} rawVenues={venues} />
    </section>
    }
  </article>
}
