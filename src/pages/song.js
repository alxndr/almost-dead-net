import React, {useEffect, useState} from 'react'
import {filter, find, propEq} from 'ramda'

import Logger from '../logger'
import {SONG_PERFORMANCES_URL, SONGS_URL} from '../data'
import {getCsv} from '../fetch'

import './song.css'

const lgr = new Logger('Song page')

export default function Song({match: {params}}) {
  const [songs, setSongs] = useState(null)
  const [performances, setPerformances] = useState(null)
  useEffect(() => {
    getCsv(SONGS_URL, setSongs)
    getCsv(SONG_PERFORMANCES_URL, setPerformances)
  }, [])
  if (!songs) {
    return <p>Loading...</p>
  }
  if (!performances) {
    return <p>Loading...</p>
  }
  if (!songs.length) {
    return <p>Uh oh, no songs found...</p>
  }
  if (!performances.length) {
    return <p>Uh oh, no performances found...</p>
  }
  const songData = find(propEq('id', Number(params.id)))(songs)
  if (!songData) {
    return <p>Uh oh, no show data found...</p>
  }
  const performancesData = filter(propEq('song_id', Number(songData.id)))(performances)
  return <section className="songpage">
    <h1 className="songpage__name">{songData.title}</h1>
    <div className="songpage__info">
      {songData.author && songData.author === 'traditional' && <p>(traditional)</p>}
      {songData.author && songData.author !== 'traditional' && <p>by {songData.author}</p>}
      {songData.suite && <p>Part of the {songData.suite} suite</p>}
    </div>
    <div className="songpage__performances">
    </div>
  </section>
}
