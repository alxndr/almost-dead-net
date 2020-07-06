import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {filter, find, propEq} from 'ramda'

import {
  SHOWS_URL,
  SONG_PERFORMANCES_URL,
  SONGS_URL,
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
  useEffect(() => {
    parseWithCache(SHOWS_URL, setShows)
    parseWithCache(SONGS_URL, setSongs)
    parseWithCache(SONG_PERFORMANCES_URL, setPerformances)
  }, [])
  if (!(songs && performances && shows)) {
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
  const songData = find(propEq('id', Number(params.id)))(songs)
  if (!songData) {
    return <p>Uh oh, no show data found...</p>
  }
  const performancesData = filter(propEq('song_id', Number(songData.id)))(performances)
  return <section className="songpage">
    <h1 className="songpage__name">{songData.title}</h1>
    <div className="songpage__info">
      {authorInfo(songData.author)}
      {songData.suite && <p>Part of the {songData.suite} suite</p>}
    </div>
    <div className="songpage__performances">
      {performancesData && performancesData.length
        ? <>
          <h2>Performances:</h2>
          <ul>
            {performancesData.map(performanceData => {
              const showData = find(propEq('id', Number(performanceData.show_id)))(shows)
              const whichSet = // ugh
                Object.entries(SET_MAPPING)
                .find(([col_name, readable_name]) =>
                  showData[col_name] === performanceData.set_id
                )[1]
              return <li key={performanceData.id}>
                <Link to={url(routes.show, {id: showData.id})}>
                  {showData.date}
                </Link> {whichSet}
              </li>
            })}
          </ul>
        </>
        : <li>No (full) performances noted yet.</li>
      }
    </div>
  </section>
}
