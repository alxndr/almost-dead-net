import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'

import {filter, groupBy, prop, propEq, sortBy} from 'ramda'
import {Tooltip} from 'react-tippy'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './songs.css'

const removeCertainSongs = ({title}) => title && !['[unknown]', 'Drums', 'Jam'].includes(title)
const sortByTitle = sortBy(prop('title')) // TODO ignore "A", "The", etc

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
function SongLink({data: {author, core_gd, cover_gd, id, suite, title, performances}}) {
  return <Link to={`/song/${id}`}>
    "{title}"
    {' '}
    {suite && <span className="song__suite">{suite} suite</span>}
    {' '}
    {(!core_gd || cover_gd) && <Author name={author} />}
  </Link>
}

function SongsComponent({data: {allSongsCsv: {nodes: songs}, allTeasesCsv: {nodes: teases}}}) {
  const groupedByPerformed = groupBy(
    (songData) => Boolean(songData.performances),
    songs.filter(removeCertainSongs)
  )
  const allSongIdsFromTeases = teases.reduce((a,e) => a.concat(e.song_id), [])
  const groupedByTeased = groupBy(
    songData => allSongIdsFromTeases.includes(songData.id),
    groupedByPerformed[false]
  )

  return <Layout className="songs">
    <SEO
      title="JRAD songs played / teased"
      description="Repertoire of songs and teases performed by Joe Russo's Almost Dead, plus setlists of each concert"
    />

    <div className="tableofcontents">
      <p>Table of Contents</p>
      <ol>
        <li><a href="#songs__headline--performed">Songs Performed / Jammed</a></li>
        <li><a href="#songs__headline--teased">Songs Teased</a></li>
        <li><a href="#songs__headline--notyet">Not Yet Played from the GD Repertoire</a></li>
      </ol>
    </div>

    <h1 href="#songs__headline--performed">Songs Performed / Jammed</h1>
    <p>These songs have been performed in their entirety, or played as an extended theme by the entire band.</p>
    <ul className="songs__list">
      {sortByTitle(groupedByPerformed[true])
        .map(songData =>
          <li key={songData.id}>
            <SongLink data={songData} />
            <PerformanceCount perfIds={String(songData.performances).split(':')} />
          </li>
        )
      }
    </ul>

    <h1 id="songs__headline--teased">Songs Teased</h1>
    <p>These are songs which have been hinted at by one or more members of the band while playing another song.</p>
    <ul className="songs__list">
      {sortByTitle(groupedByTeased[true])
        .map(songData =>
          <li key={songData.id}>
            <SongLink data={songData} />
            <PerformanceCount text="teased" perfIds={filter(propEq('song_id', songData.id))(teases).map((row) => row.performance_id)} />
          </li>
        )
      }
    </ul>

    <h1 id="songs__headline--notyet">Not Yet Played from the GD Repertoire</h1>
    <p>This is an incomplete list of songs which the Grateful Dead or their members recorded or played live (either together or in other projects), but have been neither played nor teased by JRAD...</p>
    <ul className="songs__list">
    {sortByTitle(groupedByTeased[false])
    .map(({id, title, author, notes}) =>
      <li key={id}>
        "{title}"
        {' '}
        <Author name={author} />
        {notes?.split?.(/\s*;\s*/).map(note => note.startsWith('http')
        ? <Link to={note}>(link)</Link>
        : note
        )}
      </li>)}
    </ul>
  </Layout>
}

const SongsPage = () => <StaticQuery
  query={graphql`
    query SongsPageData {
      allSongsCsv { nodes {
        author
        core_gd
        core_jrad
        cover_gd
        id
        performances
        suite
        title
      } }
      allTeasesCsv { nodes {
        id
        by
        notes
        performance_id
        song_id
        song_name
        within
      } }
    }
  `}
  render={data => <SongsComponent data={data} />}
/>
export default SongsPage
