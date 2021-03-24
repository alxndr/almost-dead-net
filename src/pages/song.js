import React from 'react'
import {Link} from 'gatsby'
import {filter, find, propEq, uniqBy} from 'ramda'

import Layout from '../components/layout'

import './song.css'

function authorInfo(author = null) {
  switch (author) {
    case null:
    case '':
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

export default function Song({pageContext: {song, shows, sets, songs, songPerformances, teases}}) {
  if (!(song && songs && songPerformances && shows && teases && sets)) {
    return <p>Loading...</p>
  }
  const songData = song
  if (!songData) {
    return <p>Uh oh, no song data found...</p>
  }
  //const songNameSlug = songData.title.toLowerCase().replace(/["'()]+/g, '').replace(/[^a-z0-9]+/g, '-')
  //if (!params.name || params.name !== songNameSlug) {
  //  return <Redirect to={`/song/${songData.id}/${songNameSlug}`} />
  //}
  const songId = songData.id
  const performancesData = filter(propEq('song_id', songId))(songPerformances)
  const attachMoreData = performanceData => {
    const performanceIdStr = performanceData.id.toString()
    const setData = find((set) => {
      return set.setlist && set.setlist.toString().split(':').includes(performanceIdStr)
    })(Object.values(sets))
    if (!setData || !setData.id) {
      console.warn(`missing setData...`, {performanceData, sets})
      return false
    }
    const showData = find((show) => [show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id))(shows)
    if (!showData || !showData.id) {
      console.warn(`missing showData...`, {performanceData, setData})
      return false
    }
    const whichSet = Object.entries(SET_MAPPING).find(([col_name, readable_name]) => showData[col_name] === setData.id)[1]
    const variation = performanceData.variation
      ? `(${performanceData.variation})`
      : false
    return {performanceData, showData, variation, whichSet}
  }

  const performancesSorted = performancesData
    .map(attachMoreData)
    .filter((data) => !!data.showData)
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
  const uniqShows = uniqBy((perf) => perf.showData.id, performancesSorted)
  const performances = performancesSorted
    .map(({performanceData, showData, variation, whichSet}) => {
      return <li key={performanceData.id}>
        <Link to={`/show/${showData.id}`}>
          {showData.date} {variation} in {whichSet}
        </Link>
      </li>
    })
  const performancesComponent = performancesData.length > 0
    ?  <>
      <h2>Performed at {`${uniqShows.length} Show${uniqShows.length === 1 ? '' : 's'}`}</h2>
      <ul>
        {performances}
      </ul>
    </>
    : false

  const teasesData = filter(propEq('song_id', songId))(teases)
  const teasesComponent = teasesData.length > 0
    ? <>
      <h2>Teases</h2>
      <ul>
        {teasesData.map(teaseData => {
          const performanceData = find(propEq('id', teaseData.performance_id))(songPerformances) //performancesObject[teaseData.performance_id]
          const setData = find((set) => set.setlist.toString().split(':').includes(performanceData.id.toString()))(sets)
          const showData = find((show) => [show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id))(shows)
          return <li key={teaseData.id}>
            within <Link to={`/show/${showData.id}`}>{teaseData.within} — {showData.date}</Link>
          </li>
        })}
      </ul>
    </>
    : false

  return <Layout>
    <section className="songpage">
      <h1 className="songpage__name">{songData.title}</h1>
      <div className="songpage__info">
        {authorInfo(songData.author)}
        {songData.suite && <p>Part of the {songData.suite} suite</p>}
      </div>
      <div className="songpage__performances">{performancesComponent}</div>
      <div className="songpage__teases">{teasesComponent}</div>
    </section>
  </Layout>
}
