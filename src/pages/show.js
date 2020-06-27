import React, {useEffect, useState} from 'react'
// import Papa from 'papaparse'
import {find, propEq} from 'ramda'

import {SEGUES_URL, SETS_URL, SHOWS_URL, VENUES_URL} from '../data'
import {getCsv} from '../fetch'

import Setlist from '../components/setlist'

import './show.css'

export default function Show({match: {params}}) {
  const [segues, setSegues] = useState(null)
  const [shows, setShows] = useState(null)
  const [sets, setSets] = useState(null)
  const [venues, setVenues] = useState(null)
  useEffect(() => {
    getCsv(SEGUES_URL, setSegues)
    getCsv(SHOWS_URL, setShows)
    getCsv(SETS_URL, setSets)
    getCsv(VENUES_URL, setVenues)
  }, [])
  if (!shows) {
    return <p>Loading shows...</p>
  }
  if (!venues) {
    return <p>Loading venues...</p>
  }
  if (!sets) {
    return <p>Loading sets...</p>
  }
  if (!segues) {
    return <p>Loading segues...</p>
  }
  if (!shows.length) {
    return <p>Uh oh, no shows found...</p>
  }
  if (!venues.length) {
    return <p>Uh oh, no venues found...</p>
  }
  if (!sets.length) {
    return <p>Uh oh, no sets found...</p>
  }
  if (!segues.length) {
    return <p>Uh oh, no segues found...</p>
  }
  const findShow = find(propEq('id', Number(params.id)))
  const showData = findShow(shows)
  if (!showData) {
    return <p>Uh oh, no show data found...</p>
  }
  const {date, venue_id} = showData
  const findVenue = find(propEq('id', Number(venue_id)))
  const venueData = findVenue(venues)
  if (!venueData) {
    return <p>Uh oh, no venue data found...</p>
  }
  const {name, location} = venueData
  const setlists = [1, 2, 3].reduce((stlsts, which) => {
    if (showData[`set${which}`]) {
      const setId = showData[`set${which}`]
      const setData = find(propEq('id', Number(setId)))(sets)
      return stlsts.concat([<Setlist isEncore={false} which={which} id={setData.id} setlist={typeof setData.setlist === "number" ? [setData.setlist] : setData.setlist.split(':')} />])
    }
    return stlsts
  }, [])
  const encores = [1, 2].reduce((encrs, which) => {
    if (showData[`encore${which}`]) {
      const setId = showData[`encore${which}`]
      const setData = find(propEq('id', Number(setId)))(sets)
      return encrs.concat([<Setlist isEncore={true} which={which} id={setData.id} setlist={typeof setData.setlist === "number" ? [setData.setlist] : setData.setlist.split(':')} />])
    }
    return encrs
  }, [])
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
    {encores.length
      ? encores
      : <p>(no encore)</p>
    }
    </section>
    </>
}
