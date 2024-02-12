import React, {useEffect, useMemo, useState} from 'react'
import {graphql, Link} from 'gatsby'
import {filter, find, propEq, sort, uniq, uniqBy, __} from 'ramda'
import qr from 'qrcode'
import slugify from 'slugify'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './stats.css'

const venueURL = ({id, name}) => `/venue/${id}-${slugify(name)}`

const Stats = ({shows, songs, teases}) => {
  // const showIDs = Object.keys(shows)
  const venues = uniq(Object.values(shows).map(({venue}) => venue))
  return <>
    {/*<h2>Shows</h2>
    <ol>
      {sort(numericalSort, showIDs).map((showID) => {
        const {date, venue} = shows[showID]
        return <li key={showID}>
          <Link to={`/show/${showID}`}>{date}</Link>
          {' at '}
          <Link to={venueURL(venue)}>{venue.name}, {venue.location}</Link>
        </li>
      })}
    </ol>*/}
    <h2>Venues</h2>
    <ol>
      {venues.map((venue) => <li key={venue.id}><Link to={venueURL(venue)}>{venue.name}, {venue.location}</Link></li>)}
    </ol>
    <h2>Songs</h2>
    <ol>
      {songs.map(({song_id, song_name}) => <li key={song_id}><Link to={`/song/${song_id}`}>{song_name}</Link></li>)}
    </ol>
    <h2>Teases</h2>
    <ol>
      {teases.map((tease) => <li key={tease.song_id}><Link to={`/song/${tease.song_id}`}>{tease.song_name}</Link></li>)}
    </ol>
  </>
}

// const numericalSort = (a, b) => a - b
const reverseIntoBinary = (acc, elem) => `${elem ? '1' : '0'}${acc}`

function toHex(arr) {
  const binString = arr.slice(1).reduce(reverseIntoBinary, '') // 0th index unused...
  const code = BigInt(`0b${binString}`).toString(16)
  return code
}
function toIds(arr) {
  return arr.reduce((acc, elem, idx) => {
    if (elem)
      return acc.concat(String(idx))
    return acc
  }, [])
}

export default function StatsPage({data, location}) {
  const queryParams = new URLSearchParams(location.search)
  const {
    allSetsCsv: {nodes: allSets},
    allShowsCsv: {nodes: allShows},
    allSongperformancesCsv: {nodes: allPerfs},
    allTeasesCsv: {nodes: allTeases},
    allVenuesCsv: {nodes: allVenues},
  } = data
  const initialChecks = new Array(allShows.length+1).fill(false)
  if (queryParams.has('hex')) {
    BigInt(`0x${queryParams.get('hex')}`).toString(2).split('').reverse().map((elem, idx) => {
      // `reverse` means that we are starting with low bits
      initialChecks[idx + 1] = Boolean(Number(elem)) // 0th index of checks is ignored
    })
  }
  const [checks, setChecks] = useState(initialChecks) // 0th index unused...
  const selectedIds = useMemo(() => toIds(checks), [checks])
  const showsCode = useMemo(() => toHex(checks), [checks])
  const url = useMemo(() => `https://almost-dead.net/stats?hex=${showsCode}`, [showsCode])

  const [qrSrc, setQrSrc] = useState(null);
  useEffect(
    async () => {
      if (showsCode !== '0') {
        setQrSrc(await qr.toDataURL(url, {errorCorrectionLevel: 'Q'}))
      }
    },
    [showsCode])

  const findSet = find(__, allSets)
  const findSongPerf = find(__, allPerfs)
  const filterTeases = filter(__, allTeases)
  const findVenue = find(__, allVenues)
  const uniqBySongId = uniqBy((o) => o.song_id)
  const showsData = useMemo(() =>
    allShows
      .filter(show => selectedIds.includes(show.id))
      .map(show => ({...show, venue: findVenue(propEq(show.venue_id, 'id'))})),
    [allShows, selectedIds])
  const perfsData = useMemo(() =>
    uniqBySongId(Object.values(showsData)
      .reduce((setIDs, show) => setIDs.concat([show.set1, show.set2, show.set3, show.encore1, show.encore2].filter((id) => Boolean(id))), []) // now it is an array of set ID strings...
      .map(setID => findSet(propEq(setID, 'id'))) // now it is an array of set objects
      .flatMap(({setlist}) => String(setlist).split(':')) // now it is an array of songperf ID strings
      .map(songPerfID => findSongPerf(propEq(songPerfID, 'id')))), // now it is an array of songperf objs
    [showsData])
  const teasesData = useMemo(() =>
    uniqBySongId(perfsData.flatMap(perf => filterTeases(propEq(perf.id, 'performance_id')))),
    [perfsData])

  return <Layout className="statspage">
    <SEO title="JRAD Show Stats" description="Select the concerts you were at and run the stats!" />
    <h1>Show Stats</h1>
    {qrSrc && <p><a href={url}><img src={qrSrc} alt={`QR code for the current page ${url}`} style={{position:'absolute',top:0,right:0,maxWidth:'25%',maxHeight:'100px'}}/></a></p>}
    {selectedIds.length
      ? <>
          <p>
            <span className="nowrap">{selectedIds.length} shows:</span>
            <ul className="selected">{selectedIds.map(id => <li className="nowrap"><Link to={`/show/${id}`}>#{id}</Link></li>)}</ul>
          </p>
        </>
      : <p>Select some shows!</p>
    }
    <form>
      <ul className="showslist">
      {allShows.map(show =>
        <li key={show.id}>
          <label>
            <input type="checkbox"
              name={`selected[${show.id}]`}
              checked={checks?.[show.id]}
              onChange={() => {
                const newChecks = [...checks]
                newChecks[show.id] = !checks[show.id]
                setChecks(newChecks)
              }}
            />
            {show.tagline}
          </label>
        </li>
      )}
      </ul>
    </form>
    {selectedIds.length &&
      <Stats shows={showsData} songs={perfsData} teases={teasesData} />
    }

  </Layout>
}

export const query = graphql`
  query StatsData {
    allSetsCsv             { nodes { id, setlist } }
    allShowsCsv            { nodes { id, date, encore1, encore2, set1, set2, set3, tagline, venue_id } }
    allSongperformancesCsv { nodes { id, song_id, song_name } }
    allTeasesCsv           { nodes { id, performance_id, song_id, song_name } }
    allVenuesCsv           { nodes { id, location, name } }
  }
`
