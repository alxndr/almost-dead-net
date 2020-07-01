import React, {useEffect, useState} from 'react'
import {find, propEq} from 'ramda'
import dompurify from 'dompurify'

import {SETS_URL, SHOWS_URL, VENUES_URL} from '../data'
import {getCsv} from '../fetch'

import Setlist from '../components/setlist'
import ShowPaginator from '../components/show_paginator'

import './show.css'

function linkShowNotes(text) {
  return <>{text.split(/\s/g).flatMap(word => word.startsWith('https://')
    ? [<a href={word} rel="noopener noreferrer" target="_blank">{dompurify.sanitize(word)}</a>, ' ']
    : [dompurify.sanitize(word), ' '])
    }
  </>
}

export default function Show({match: {params}}) {
  const [shows, setShows] = useState(null)
  const [sets, setSets] = useState(null)
  const [venues, setVenues] = useState(null)
  useEffect(() => {
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
  if (!shows.length) {
    return <p>Uh oh, no shows found...</p>
  }
  if (!venues.length) {
    return <p>Uh oh, no venues found...</p>
  }
  if (!sets.length) {
    return <p>Uh oh, no sets found...</p>
  }
  const showData = find(propEq('id', Number(params.id)))(shows)
  if (!showData) {
    return <p>Uh oh, no show data found...</p>
  }
  const nextShow = find(propEq('id', Number(params.id) + 1))(shows)
  const prevShow = find(propEq('id', Number(params.id) - 1))(shows)
  const {date, notes, venue_id} = showData
  const findVenue = find(propEq('id', Number(venue_id)))
  const venueData = findVenue(venues)
  if (!venueData) {
    return <p>Uh oh, no venue data found...</p>
  }
  const {name, location} = venueData
  const setlists = [1, 2, 3].reduce((setlists, which) => {
    if (!showData[`set${which}`]) {
      return setlists
    }
    const setData = find(propEq('id', Number(showData[`set${which}`])))(sets)
    const setlist = typeof setData.setlist === "number"
      ? [setData.setlist]
      : setData.setlist.split(':')
    return setlists.concat([<Setlist isEncore={false} which={which} key={setData.id} setlist={setlist} />])
  }, [])
  const encores = [1, 2].reduce((encores, which) => {
    if (!showData[`encore${which}`]) {
      return encores
    }
    const setData = find(propEq('id', Number(showData[`encore${which}`])))(sets)
    const setlist = typeof setData.setlist === "number"
      ? [setData.setlist]
      : setData.setlist.split(':')
    return encores.concat([<Setlist isEncore={true} which={which} key={setData.id} setlist={setlist} />])
  }, [])
  return <div className="showpage">
    <section>
      <h1 className="showpage__pagetitle">
        <span className="showpage__pagetitle--date">{date}</span>
        <span className="showpage__pagetitle--venue">{name}, {location}</span>
        <span className="showpage__pagetitle--number">show #{showData.id}</span>
      </h1>
      {notes && <div className="showpage__notes">{linkShowNotes(notes)}</div>}
      {setlists.length
        ? setlists
        : <p>Uh oh, no sets found.</p>
      }
      {encores.length
        ? encores
        : <p>(no encore)</p>
      }
    </section>
    <ShowPaginator prev={prevShow} next={nextShow} />
  </div>
}
