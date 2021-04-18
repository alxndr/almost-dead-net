import React from 'react'
import {Link} from 'gatsby'

import {groupBy, prop, sortBy} from 'ramda'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './songs.css'

function Author({name}) {
  if (!name || name === 'traditional') {
    return false
  }
  return <span className="song__author">
    {name}
  </span>
}
function SongLink({data: {author, core_gd, id, performances, suite, title, ...rest}}) {
  return <li>
    <Link to={`/song/${id}`}>
      "{title}"
      {suite && <span className="song__suite">{suite} suite</span>}
      {!core_gd && <Author name={author} />}
    </Link>
  </li>
}

export default function SongsPage({pageContext: {songs}}) {
  const songsClean = songs.filter(songData => songData.title && songData.title !== '[unknown]')
  const groupedBySuite = groupBy(
    (songData) => songData.suite,
    songsClean
  )
  const songsAndSuites = [
    ...groupedBySuite[''],
    {title: 'Terrapin Suite',       sections: groupedBySuite['Terrapin']},
    {title: 'Weather Report Suite', sections: groupedBySuite['Weather Report']},
  ]
  return <Layout className="songs">
    <SEO
      title="JRAD — all songs played"
      description="Almost-complete repertoire of Joe Russo's Almost Dead (JRAD) songs and teases"
    />
    <h1>Songs (teased & performed)</h1>
    <ul className="songs__list">
      {sortBy((prop('title')))(songsClean)
        .map(songData => songData.sections ? songData.title : <SongLink data={songData} />)}
    </ul>
  </Layout>
}
