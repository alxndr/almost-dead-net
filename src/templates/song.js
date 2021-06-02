import React from 'react'
import {graphql, Link} from 'gatsby'
import {filter, find, propEq, uniqBy} from 'ramda'

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

export const query = graphql`
  query SongTemplate($songId: String!) {
    songsCsv(id: {eq: $songId}) {
      id
      author
      suite
      title
      performances
    }
    allSetsCsv { nodes {
      id
      setlist
    } }
    allShowsCsv { nodes {
      id
      date
      encore1
      encore2
      set1
      set2
      set3
      soundcheck
    } }
    allSongperformancesCsv { nodes {
      id
    } }
    allTeasesCsv(filter: {song_id: {eq: $songId}}) { nodes {
      id
      performance_id
      within
    } }
  }
`

export default function Song({data}) {
  const {
    songsCsv: song,
    allSetsCsv: {nodes: allSets},
    allShowsCsv: {nodes: allShows},
    allSongperformancesCsv: {nodes: allSongPerformances},
    allTeasesCsv: {nodes: teases},
  } = data
  if (!song) {
    return <p>Uh oh, no song data found...</p>
  }
  const onlyThisSongsPerformanceIds = song.performances.split(':')
  if (!allSongPerformances.length) {
    throw new Error('No data for allSongPerformances')
  }
  if (!allShows.length) {
    throw new Error('No data for allShows')
  }
  if (!allSets.length) {
    throw new Error('No data for allSets')
  }
  const performancesSorted = allSongPerformances
    .filter((songPerformance) => onlyThisSongsPerformanceIds.includes(songPerformance.id))
    .map((performanceData) => {
      const performanceIdStr = performanceData.id.toString()
      const setData = find((set) =>
        set.setlist && set.setlist.toString().split(':').includes(performanceIdStr)
      )(allSets)
      const showData = find((show) => [
        show.soundcheck,
        show.set1,
        show.set2,
        show.set3,
        show.encore1,
        show.encore2
      ].includes(setData.id))(allShows)
      if (!showData) {
        console.warn('Missing showData...', {song, performanceData, setData})
      }
      const whichSet = Object.entries(SET_MAPPING)
        .find(([col_name, readable_name]) => showData[col_name] === setData.id)[1]
      const variation = performanceData.variation
        ? `(${performanceData.variation})`
        : false
      return {performanceData, showData, variation, whichSet}
    })
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
  const performancesComponent = performancesSorted.length > 0
    ?  <>
      <h2>Performed at {`${uniqShows.length} Show${uniqShows.length === 1 ? '' : 's'}`}</h2>
      <ul>
        {performances}
      </ul>
    </>
    : false

  const teasesComponent = teases.length > 0
    ? <>
      <h2>Teases</h2>
      <ul>
        {teases.map(teaseData => {
          const performanceData = find(propEq('id', teaseData.performance_id))(allSongPerformances)
          if (!performanceData || !performanceData.id) {
            return false
          }
          const setData = find((set) =>
            set.setlist.toString().split(':').includes(performanceData.id.toString())
          )(allSets)
          const showData = find((show) =>
            [show.soundcheck, show.set1, show.set2, show.set3, show.encore1, show.encore2].includes(setData.id)
          )(allShows)
          return <li key={teaseData.id}>
            <Link to={`/show/${showData.id}`}>{showData.date} within {teaseData.within} {performanceData.variation && `(${performanceData.variation})`} </Link>
          </li>
        })}
      </ul>
    </>
    : false

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
    <div className="songpage__performances">{performancesComponent}</div>
    <div className="songpage__teases">{teasesComponent}</div>
  </Layout>
}

/*
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
