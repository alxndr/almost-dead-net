import React, {useEffect, useState} from 'react'
import {filter, find, includes, propEq, sort, where} from 'ramda'

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

export default function Show({pageContext: {show, shows, sets, venue, guests, recordings, performances, segues, songs, teases, lastShowId}}) {
  if (!show) {
    console.error('Show page, missing show..............')
    return false
  }

  const {date, event, notes} = show

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
  const showGuests = filter(where({shows: includes(show.id)}))(guestsWithSplitShows)

  const showRecordings = sort((a, b) => {
    if (a.type === b.type) return 0;
    if (a.type === 'pro-shot') return -1;
    if (b.type === 'pro-shot') return 1;
    if (a.type === 'video') return -1;
    if (b.type === 'video') return 1;
    if (a.type === 'soundboard') return -1;
    if (b.type === 'soundboard') return 1;
    if (a.type === 'audience') return -1;
    if (b.type === 'audience') return 1;
    console.error('cannot sort recordings......', {a, b})
  }, recordings)

  const setlists = [1, 2, 3].reduce((setlists, which) => {
    if (!show[`set${which}`]) {
      return setlists
    }
    const setData = find(propEq('id', (show[`set${which}`])))(sets)
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
    if (!show[`encore${which}`]) {
      return encores
    }
    const setData = find(propEq('id', (show[`encore${which}`])))(sets)
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
  return <Layout className="showpage">
    <h1 className="showpage__pagetitle">
      <span className="showpage__pagetitle--band">Joe Russo's Almost Dead</span>
      <span className="showpage__pagetitle--date">{date}</span>
      {event && <span className="showpage__pagetitle--event">{event}</span>}
      {venue && <span className="showpage__pagetitle--venue">{venue.name}, {venue.location}</span>}
      <span className="showpage__pagetitle--number">show #{show.id}</span>
    </h1>
    <section className="showpage__setlist">
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
    <nav className="showpage__nav">
      {Number(show.id) > 1 && <a href={`/show/${Number(show.id) - 1}`} className="showpage__nav__prev" title="previous show">Prior show</a>}
      {Number(show.id) < lastShowId && <a href={`/show/${Number(show.id) + 1}`} className="showpage__nav__next" title="following show">Next show</a>}
    </nav>
  </Layout>
}
