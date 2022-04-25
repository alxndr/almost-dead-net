import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'

import {filter, groupBy, prop, propEq, sortBy} from 'ramda'
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

function SongsComponent({data: {allSongsCsv: {nodes: songs}, allTeasesCsv: {nodes: teases}}}) {
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
      title="JRAD — all songs played or teased"
      description="Almost-complete repertoire of Joe Russo's Almost Dead (JRAD) songs and teases"
    />
    <p><a href="#songs__headline--teased">Jump down to "Teases Only"</a></p>
    <h1>Songs Performed / Jammed</h1>
    <ul className="songs__list">
      {sortBy((prop('title')))(performedSongs)
        .map(songData =>
          songData.sections
          ? songData.title
          : <li key={songData.id}>
            <SongLink data={songData} />
            <PerformanceCount perfIds={String(songData.performances).split(':')} />
          </li>
        )
      }
    </ul>
    <h1 id="songs__headline--teased">Songs Teased</h1>
    <ul className="songs__list">
      {sortBy((prop('title')))(teasedSongs)
          .map(songData => {
            const teaseRows = filter(propEq('song.id', songData.id))(teases)
            const teasePerfIds = teaseRows.map((row) => row.performance.id)
            return songData.sections
                ? songData.title
                : <li key={songData.id}>
                  <SongLink data={songData} />
                  <PerformanceCount text="teased" perfIds={teasePerfIds} />
                </li>
          }
      )}
    </ul>
  </Layout>
}

const SongsPage = () => <StaticQuery
  query={graphql`
    query SongsPageData {
      allSongsCsv { nodes {
        id
      } }
      allTeasesCsv { nodes {
        id
        notes
        song_name
      } }
    }
  `}
  render={data => <SongsComponent data={data} />}
/>
export default SongsPage
