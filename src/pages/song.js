import React, {useEffect, useState} from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import {filter, find, propEq} from 'ramda'

import {
  SHOWS_URL,
  SETS_URL,
  SONG_PERFORMANCES_URL,
  SONGS_URL,
  TEASES_URL,
} from '../data'
import {parseIntoObjectWithCache} from '../fetch'
import routes, {url} from '../routes'

import './song.css'

function authorInfo(author = null) {
  switch (author) {
    case null:
      return false
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
  const [showsObject, setShows] = useState(null)
  const [setsObject, setSets] = useState(null)
  const [songsObject, setSongs] = useState(null)
  const [performancesObject, setPerformances] = useState(null)
  const [teasesObject, setTeases] = useState(null)
  useEffect(() => {
    parseIntoObjectWithCache(SHOWS_URL, setShows)
    parseIntoObjectWithCache(SETS_URL, setSets)
    parseIntoObjectWithCache(SONGS_URL, setSongs)
    parseIntoObjectWithCache(SONG_PERFORMANCES_URL, setPerformances, null, (rowData) => !!rowData.song_id)
    parseIntoObjectWithCache(TEASES_URL, setTeases)
  }, [])

  if (!(songsObject && performancesObject && showsObject && teasesObject && setsObject)) {
    return <p>Loading...</p>
  }

  const songData = songsObject[params.id]
  if (!songData) {
    return <p>Uh oh, no song data found...</p>
  }
  const songNameSlug = songData.title.toLowerCase().replace(/["'()]+/g, '').replace(/[^a-z0-9]+/g, '-')
  if (!params.name || params.name !== songNameSlug) {
    return <Redirect to={`/song/${songData.id}/${songNameSlug}`} />
  }
  const songId = Number(songData.id)

  const performancesData = filter(propEq('song_id', songId))(Object.values(performancesObject))
  const performancesComponent = performancesData.length > 0
    ?  <>
      <h2>Performances</h2>
      <ul>
        {performancesData
          .map(performanceData => {
            const performanceIdStr = performanceData.id.toString()
            const setData = find((set) => {
              return set.setlist && set.setlist.toString().split(':').includes(performanceIdStr)
            })(Object.values(setsObject))
            if (!setData || !setData.id) {
              console.warn(`missing setData...`, {performanceData, setsObject})
              return false
            }
            const showData = find((show) => [show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id))(Object.values(showsObject))
            if (!showData || !showData.id) {
              console.warn(`missing showData...`, {performanceData, setData})
              return false
            }
            const whichSet = Object.entries(SET_MAPPING).find(([col_name, readable_name]) => showData[col_name] === setData.id)[1]
            const variation = performanceData.variation
              ? `(${performanceData.variation})`
              : false
            return {performanceData, showData, variation, whichSet}
          })
          .sort((perfA, perfB) => {
            const dateA = new Date(perfA.showData.date.split('/'))
            const dateB = new Date(perfB.showData.date.split('/'))
            if (dateA > dateB) {
              return -1
            }
            if (dateA < dateB) {
              return 1
            }
            return 0
          })
          .map(({performanceData, showData, variation, whichSet}) => {
            return <li key={performanceData.id}>
              <Link to={url(routes.show, {id: showData.id})}>
                {showData.date} {variation} in {whichSet}
              </Link>
            </li>
          })
        }
      </ul>
    </>
    : false

  const teasesData = filter(propEq('song_id', songId))(Object.values(teasesObject))
  const teasesComponent = teasesData.length > 0
    ? <>
      <h2>Teases</h2>
      <ul>
        {teasesData.map(teaseData => {
          const performanceData = performancesObject[teaseData.performance_id] //find(propEq('id', Number(teaseData.performance_id)))(performances)
          const setData = find((set) => set.setlist.toString().split(':').includes(performanceData.id.toString()))(Object.values(setsObject))
          const showData = find((show) => [show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id))(Object.values(showsObject))
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
