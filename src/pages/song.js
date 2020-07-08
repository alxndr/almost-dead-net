import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {filter, find, propEq} from 'ramda'

import {
  SHOWS_URL,
  SONG_PERFORMANCES_URL,
  SONGS_URL,
  TEASES_URL,
} from '../data'
import {parseWithCache} from '../fetch'
import routes, {url} from '../routes'

import './song.css'

function authorInfo(author = null) {
  switch (author) {
    case null:
      return <p>(originally by the Grateful Dead)</p>
    case 'traditional':
      return <p>(traditional)</p>
    default:
      return <p>by {author}</p>
  }
}

const SET_MAPPING = { // 'show table column name' to 'human readable set name'
  set1: 'set 1',
  set2: 'set 2',
  set3: 'set 3',
  encore1: 'encore',
  encore2: 'double encore',
}

export default function Song({match: {params}}) {
  const [shows, setShows] = useState(null)
  const [songs, setSongs] = useState(null)
  const [performances, setPerformances] = useState(null)
  const [teases, setTeases] = useState(null)
  useEffect(() => {
    parseWithCache(SHOWS_URL, setShows)
    parseWithCache(SONGS_URL, setSongs)
    parseWithCache(SONG_PERFORMANCES_URL, setPerformances)
    parseWithCache(TEASES_URL, setTeases)
  }, [])

  if (!(songs && performances && shows && teases)) {
    return <p>Loading...</p>
  }
  if (!songs.length) {
    return <p>Uh oh, no songs found...</p>
  }
  if (!performances.length) {
    return <p>Uh oh, no performances found...</p>
  }
  if (!shows.length) {
    return <p>Uh oh, no shows found...</p>
  }
  if (!teases.length) {
    return <p>Uh oh, no teases found...</p>
  }

  const songData = find(propEq('id', Number(params.id)))(songs)
  if (!songData) {
    return <p>Uh oh, no song data found...</p>
  }
  const songId = Number(songData.id)

  const performancesData = filter(propEq('song_id', songId))(performances)
  const performancesComponent = performancesData.length > 0
    ?  <>
      <h2>Performances</h2>
      <ul>
        {performancesData.filter(data => !data.variation).map(performanceData => {
          const showData = find(propEq('id', Number(performanceData.show_id)))(shows)
          if (!showData) { // TODO explore this more — only happens for soundchecks? how to reuse...
            return false
          }
          const whichSet = Object.entries(SET_MAPPING).find(([col_name, readable_name]) => showData[col_name] === performanceData.set_id)[1]
          return <li key={performanceData.id}>
            <Link to={url(routes.show, {id: showData.id})}>
              {showData.date} {whichSet}
            </Link>
          </li>
        })}
      </ul>
    </>
    : false

  const teasesData = filter(propEq('song_id', songId))(teases)
  const teasesComponent = teasesData.length > 0
    ? <>
      <h2>Teases</h2>
      <ul>
        {teasesData.map(teaseData => {
          const performanceData = find(propEq('id', Number(teaseData.performance_id)))(performances)
          const showData = find(propEq('id', performanceData.show_id))(shows)
          return <li key={teaseData.id}>
            within <Link to={url(routes.show, {id: showData.id})}>{teaseData.within} — {showData.date}</Link>
          </li>
        })}
      </ul>
    </>
    : false

  return <section className="songpage">
    <h1 className="songpage__name">{songData.title}</h1>
    <div className="songpage__info">
      {authorInfo(songData.author)}
      {songData.suite && <p>Part of the {songData.suite} suite</p>}
    </div>
    <div className="songpage__performances">{performancesComponent}</div>
    <div className="songpage__teases">{teasesComponent}</div>
  </section>
}
