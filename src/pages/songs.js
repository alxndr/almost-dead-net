import React from 'react'
import {Link} from 'gatsby'

import {prop, sortBy} from 'ramda'

import Layout from '../components/layout'
import SEO from '../components/seo'

function SongLink({data: {author, id, title}}) {
  if (!title || title === '[unknown]') {
    return false
  }
  return <li>
    <Link to={`/song/${id}`}>
      "{title}"
      {author && author !== 'traditional' && ` by ${author}`}
    </Link>
  </li>
}

export default function SongsPage({pageContext: {songs}}) {
  return <Layout className="songspage">
    <SEO title="JRAD — all songs played" />
    <h1>Songs (teased & performed)</h1>
    <ul className="songspage__list">
      {sortBy((prop('title')))(songs).map(songData => <SongLink data={songData} />)}
    </ul>
  </Layout>
}
