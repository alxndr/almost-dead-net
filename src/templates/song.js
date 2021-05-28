import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import {find, propEq, uniqBy} from 'ramda'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
  soundcheck: 'soundcheck',
  set1: 'set 1',
  set2: 'set 2',
  set3: 'set 3',
  encore1: 'encore',
  encore2: 'double encore',
}

export default function Song() {
  const {
    songsCsv: song,
  } = useStaticQuery(graphql`
    query($songId: String!) {
      songsCsv(id: {eq: $songId}) {
        author
        suite
        title
        performances
      }
    }
  `)
  if (!song) {
    return <p>Uh oh, no song data found...</p>
  }
  /*
  const attachMoreData = (performanceData) => {
    console.log({performanceData})
    const performanceIdStr = performanceData.id.toString()
    const setData = find((set) => set.setlist && set.setlist.toString().split(':').includes(performanceIdStr))(sets)
    const showData = find((show) => [
      show.soundcheck,
      show.set1,
      show.set2,
      show.set3,
      show.encore1,
      show.encore2
    ].includes(setData.id))(shows)
    const whichSet = Object.entries(SET_MAPPING).find(([col_name, readable_name]) => showData[col_name] === setData.id)[1]
    const variation = performanceData.variation
      ? `(${performanceData.variation})`
      : false
    return {performanceData, showData, variation, whichSet}
  }

  const performancesSorted = songPerformances
    .map(attachMoreData)
    .filter((data) => data && data.showData)
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
  const performancesComponent = songPerformances.length > 0
    ?  <>
      <h2>Performed at {`${uniqShows.length} Show${uniqShows.length === 1 ? '' : 's'}`}</h2>
      <ul>
        {performances}
      </ul>
    </>
    : false

  const teasesComponent = false && teases.length > 0
    ? <>
      <h2>Teases</h2>
      <ul>
        {teases.map(teaseData => {
          const performanceData = find(propEq('id', teaseData.performance_id))(teasePerformances)
          if (!performanceData || !performanceData.id) {
            return false
          }
          const setData = find((set) => set.setlist.toString().split(':').includes(performanceData.id.toString()))(sets)
          const showData = find((show) => [show.soundcheck, show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id))(shows)
          return <li key={teaseData.id}>
            <Link to={`/show/${showData.id}`}>{showData.date} within {teaseData.within} {performanceData.variation && `(${performanceData.variation})`} </Link>
          </li>
        })}
      </ul>
    </>
    : false
  */

  console.log('song data', song)
  return <Layout className="songpage">
    <SEO
      title={`"${song.title}" performances/teases … Almost-Dead.net`}
      description={`List of each time Joe Russo's Almost Dead has performed or teased the song "${song.title}"`}
    />
    <h1 className="songpage__name">{song.title}</h1>
    <div className="songpage__info">
      {authorInfo(song.author)}
      {song.suite && <p>Part of the {song.suite} suite</p>}
    </div>
    {/*
    <div className="songpage__performances">{performancesComponent}</div>
    <div className="songpage__teases">{teasesComponent}</div>
    */}
  </Layout>
}

/*
    const teaseRows = filter(propEq('song_id', song.id))(teases)
    const teasePerfIds = teaseRows.map((row) => row.performance_id)
        teasePerformances: filter((perf) => teasePerfIds.includes(perf.id))(performances),
    allTeasePerformancesCsv { nodes {
    } }

    allSetsCsv { nodes {
      setlist
    } }
    allShowsCsv { nodes {
      encore1
      encore2
      set1
      set2
      set3
      soundcheck
    } }
    allSongperformancesCsv { nodes {
      id
      variation
    } }
    allTeasesCsv { nodes {
      performance_id
      within
    } }
*/
