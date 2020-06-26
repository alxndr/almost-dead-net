import React, {useEffect, useState} from 'react'
import Papa from 'papaparse'
import {find, propEq} from 'ramda'

import {SETS_URL, SHOWS_URL, VENUES_URL} from '../data'

import Setlist from '../components/setlist.js'

import './show.css'

const papaOptions = {
  download: true,
  dynamicTyping: true,
  header: true,
  worker: true,
}

export default function Show({match: {params}}) {
  const [shows, setShows] = useState(null)
  const [sets, setSets] = useState(null)
  const [venues, setVenues] = useState(null)
  useEffect(() => {
    Papa.parse(SHOWS_URL, { ...papaOptions,
      complete: ({data, errors, meta}) => {
        if (errors.length)
          throw new Error('Ruh roh', {data, errors, meta})
        setShows(data)
      },
    })
    Papa.parse(SETS_URL, { ...papaOptions,
      complete: ({data, errors, meta}) => {
        if (errors.length)
          throw new Error('Ruh roh', {data, errors, meta})
        setSets(data)
      },
    })
    Papa.parse(VENUES_URL, { ...papaOptions,
      complete: ({data, errors, meta}) => {
        if (errors.length)
          throw new Error('Ruh roh', {data, errors, meta})
        setVenues(data)
      },
    })
  }, [])
  if (!shows) {
    return <p>Loading shows...</p>
  }
  if (!venues) {
    return <p>Loading venues...</p>
  }
  if (!shows.length) {
    return <p>Uh oh, no shows found...</p>
  }
  if (!venues.length) {
    return <p>Uh oh, no venues found...</p>
  }
  if (!sets) {
    return <p>Loading sets...</p>
  }
  if (!sets.length) {
    return <p>Uh oh, no sets found...</p>
  }
  const findShow = find(propEq('id', Number(params.id)))
  const showData = findShow(shows)
  if (!showData) {
    return <p>Uh oh, no show data found...</p>
  }
  const {date, venue_id} = showData
  const findVenue = find(propEq('id', venue_id))
  const venueData = findVenue(venues)
  const {name, location} = venueData
  const setlists = []
  if (showData.set1) {
    const setData = find(propEq('id', Number(showData.set1)))(sets)
    console.log('raw set data!!', setData)
    const setlist = <Setlist isEncore={false} which={1} id={setData.id} setlist={[setData['song performances']]} />
    setlists.push(setlist)
  }
  if (showData.set2) {
    const setData = find(propEq('id', Number(showData.set2)))(sets)
    const setlist = <Setlist isEncore={false} which={2} id={setData.id} setlist={[setData['song performances']]} />
    setlists.push(setlist)
  }
  if (showData.set3) {
    const setData = find(propEq('id', Number(showData.set3)))(sets)
    const setlist = <Setlist isEncore={false} which={2} id={setData.id} setlist={[setData['song performances']]} />
    setlists.push(setlist)
  }
  const encores = []
  if (showData.encore1) {
    const setData = find(propEq('id', Number(showData.encore1)))(sets)
    const setlist = <Setlist isEncore={true} which={1} id={setData.id} setlist={[setData['song performances']]} />
    setlists.push(setlist)
  }
  if (showData.encore2) {
    const setData = find(propEq('id', Number(showData.encore2)))(sets)
    const setlist = <Setlist isEncore={true} which={2} id={setData.id} setlist={[setData['song performances']]} />
    setlists.push(setlist)
  }
  console.log({sets, encores})
  return <>
    <h1 className="pagetitle">
      <span className="pagetitle--number">{showData.id}</span>
      <span className="pagetitle--date">{date}</span>
      <span className="pagetitle--venue">{name}, {location}</span>
    </h1>
    <section>
      {setlists.length
        ? setlists
        : <p>Uh oh, no sets found.</p>
      }
    </section>
  </>
}
