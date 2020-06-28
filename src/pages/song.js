import React, {useEffect, useState} from 'react'
import {find, propEq} from 'ramda'

import Logger from '../logger'
import {SONGS_URL} from '../data'
import {getCsv} from '../fetch'

const lgr = new Logger('Song page')

export default function Song({match: {params}}) {
  const [songs, setSongs] = useState(null)
  useEffect(() => {
    getCsv(SONGS_URL, setSongs)
  }, [])
  if (!songs) {
    return <p>Loading...</p>
  }
  if (!songs.length) {
    return <p>Uh oh, no songs found...</p>
  }
  const songData = find(propEq('id', Number(params.id)))
  if (!songData) {
    return <p>Uh oh, no show data found...</p>
  }
  lgr.log(songData)
  return <section className="songpage">
    <h1 className="songpage__name"><cite>{songData.title}</cite></h1>
    <div className="songpage__info">
    </div>
  </section>
}
