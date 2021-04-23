import React from 'react'
import {Link} from 'gatsby'

import {groupBy, prop, sortBy} from 'ramda'
import {Tooltip} from 'react-tippy'

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
function PerformanceCount({perfIds, text = 'performed'}) {
  if (!perfIds || !perfIds.length) {
    return false
  }
  const message = `${text} ${perfIds.length} time${perfIds.length === 1 ? '' : 's'}`
  return <Tooltip title={message} trigger="mouseenter focus click">
    <span className="song__perfcount" aria-label="notes" role="img">×{perfIds.length}
      <span className="hidden">{message}</span>
    </span>
  </Tooltip>
}
function SongLink({data: {author, core_gd, cover_gd, id, suite, title, performances, ...rest}}) {
  return <Link to={`/song/${id}`}>
    "{title}"
    {' '}
    {suite && <span className="song__suite">{suite} suite</span>}
    {' '}
    {(!core_gd || cover_gd) && <Author name={author} />}
  </Link>
}

export default function SongsPage({pageContext: {songs}}) {
  const songsClean = songs.filter(songData => songData.title && songData.title !== '[unknown]')
  const groupedByPerformedVsTeased = groupBy(
    (songData) => Boolean(songData.performances),
    songsClean
  )
  const performedSongs = groupedByPerformedVsTeased[true]
  const teasedSongs = groupedByPerformedVsTeased[false]

  //const groupedBySuite = groupBy(
  //  (songData) => songData.suite,
  //  performedSongs
  //)
  //const songsAndSuites = [
  //  ...groupedBySuite[''],
  //  {title: 'Terrapin Suite',       sections: groupedBySuite['Terrapin']},
  //  {title: 'Weather Report Suite', sections: groupedBySuite['Weather Report']},
  //]

  return <Layout className="songs">
    <SEO
      title="JRAD — all songs played"
      description="Almost-complete repertoire of Joe Russo's Almost Dead (JRAD) songs and teases"
    />
    <p><a href="#songs__headline--teased">Jump down to "Teases Only"</a></p>
    <h1>Songs Performed / Jammed</h1>
    <ul className="songs__list">
      {sortBy((prop('title')))(performedSongs)
        .map(songData =>
          songData.sections
          ? songData.title
          : <li>
            <SongLink data={songData} />
            <PerformanceCount perfIds={String(songData.performances).split(':')} />
          </li>
        )
      }
    </ul>
    <h1 id="songs__headline--teased">Songs Teased</h1>
    <ul className="songs__list">
      {sortBy((prop('title')))(teasedSongs)
        .map(songData =>
          songData.sections
          ? songData.title
          : <li>
            <SongLink data={songData} />
            <PerformanceCount text="teased" perfIds={String(songData.performances).split(':')} />
          </li>)}
    </ul>
  </Layout>
}
