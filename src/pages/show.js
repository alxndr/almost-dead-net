import React, {useEffect, useState} from 'react'
import {filter, find, includes, propEq, where} from 'ramda'

import Layout from '../components/layout'
import Setlist from '../components/setlist'
import Recording from '../components/recording'

import './show.css'

function normalizeSetlist(rawSetlistValue) {
  return typeof rawSetlistValue === "number"
    ? [rawSetlistValue]
    : typeof rawSetlistValue === "string"
      ? rawSetlistValue.split(':')
      : []
}

export default function Show({pageContext: {show, shows, sets, venue, guests, recordings, performances, segues, songs, teases}}) {
  const showData = show
  const {date, event, notes, venue_id} = showData
  const venueData = venue
  const {name, location} = venueData

  const guestsWithSplitShows = guests.map((guestData) => {
    if (!guestData) {
      return null
    }
    if (!guestData.shows) {
      return null
    }
    if (Number.isInteger(guestData.shows)) {
      return {
        ...guestData,
        shows: [guestData.shows]
      }
    }
    return {
      ...guestData,
      shows: guestData.shows.split(':').map(Number.bind(null))
    }
  }).filter((data) => !!data)
  const showGuests = filter(where({shows: includes(showData.id)}))(guestsWithSplitShows)

  const showRecordings = filter(propEq('show', showData.id))(recordings)

  const setlists = [1, 2, 3].reduce((setlists, which) => {
    if (!showData[`set${which}`]) {
      return setlists
    }
    const setData = find(propEq('id', (showData[`set${which}`])))(sets)
    const setlist = normalizeSetlist(setData.setlist)
    return setlists.concat([
      <Setlist
        isEncore={false}
        which={which}
        key={setData.id}
        setlist={setlist}
        performances={performances}
        segues={segues}
        songs={songs}
        teases={teases}
      />
    ])
  }, [])
  const encores = [1, 2].reduce((encores, which) => {
    if (!showData[`encore${which}`]) {
      return encores
    }
    const setData = find(propEq('id', (showData[`encore${which}`])))(sets)
    const setlist = normalizeSetlist(setData.setlist)
    return encores.concat([
      <Setlist
        isEncore={true}
        which={which}
        key={setData.id}
        setlist={setlist}
        performances={performances}
        segues={segues}
        songs={songs}
        teases={teases}
      />
    ])
  }, [])
  return <Layout>
      <div className="showpage">
      <section className="showpage__setlist">
        <h1 className="showpage__pagetitle">
          <span className="showpage__pagetitle--band">Joe Russo's Almost Dead</span>
          <span className="showpage__pagetitle--date">{date}</span>
          <span className="showpage__pagetitle--event">{event || false}</span>
          <span className="showpage__pagetitle--venue">{name}, {location}</span>
          <span className="showpage__pagetitle--number">show #{showData.id}</span>
        </h1>
        {showGuests.length
          ? <p>With {showGuests.map((guest) => guest.name).join(', ')}</p>
          : false
        }
        {setlists.length
          ? setlists
          : <p>Uh oh, no sets found.</p>
        }
        {encores.length
          ? encores
          : false
        }
        {notes && <div className="showpage__notes">{notes}</div>}
      </section>
      {showRecordings.length
        ?
          <section className="showpage__recordings">
            <h2>Recordings</h2>
            <ul>
              {showRecordings.map(({type, url}) => <Recording type={type} url={url} />)}
            </ul>
          </section>
        : false
      }
    </div>
  </Layout>
}
