import React from 'react'
import {filter, find, includes, propEq, where} from 'ramda'
import {graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

import SEO from "../components/seo"
import Setlist from '../components/setlist'

import {normalizeSetlist} from '../components/helpers/setlist-helper'

import './show-embed.css'

function Guests({guests}) {
  if (guests.length) {
    return <p>With {guests.map((guest) => guest.name).join(', ')}</p>
  }
  return false
}

function Set({show, which, isEncore = false, sets, performances, segues, teases, songs}) {
  const what = which === 'soundcheck'
    ? 'soundcheck'
    : `${isEncore ? 'encore' : 'set'}${which}`
  const setId = show[what]
  if (!setId || !sets || !sets.length) {
    return false
  }
  const setData = find(propEq('jsonId', setId))(sets)
  const setlist = normalizeSetlist(setData.setlist)
  return <Setlist
    isEncore={isEncore}
    which={which}
    key={setData.jsonId}
    setlist={setlist}
    performances={performances}
    segues={segues}
    songs={songs}
    teases={teases}
  />
}

export default function ShowEmbed({data: {
  ShowsCsv: show,
  allSetsCsv: {nodes: sets},
  allGuestsCsv: {nodes: guests},
  allSongperformancesCsv: {nodes: performances},
  allSeguesCsv: {nodes: segues},
  allSongsCsv: {nodes: songs},
  allTeasesCsv: {nodes: teases},
}}) {
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
        shows: [guestData.shows.toString()]
      }
    }
    return {
      ...guestData,
      shows: guestData.shows.split(':')
    }
  }).filter((data) => !!data)
  const showGuests = filter(where({shows: includes(show.jsonId)}))(guestsWithSplitShows)

  const setlist = [1, 2, 3].reduce((setlists, which) => setlists.concat(
    <Set which={which} show={show} performances={performances} sets={sets} segues={segues} teases={teases} songs={songs} />
  ), [])
  const encores = [1, 2].reduce((encores, which) => encores.concat(
    <Set isEncore={true} which={which} show={show} performances={performances} sets={sets} segues={segues} teases={teases} songs={songs} />
  ), [])

  const showName = `${event ? `${event}, ` : ``}${show.venue.name} (${show.venue.location})`

  return <div className="showpage-embed">
    <SEO
      title={`JRAD ${date} @ ${showName}`}
      description={`Joe Russo's Almost Dead${showGuests.length ? ` with ${showGuests.map((guest) => guest.name).join(' and ')}` : ''} at ${showName} ${date} — setlist, teases, recordings`}
    />
    <Helmet>
      <link rel="canonical" href={`/show/${show.jsonId}`} />
    </Helmet>
    <h1 className="showpage__pagetitle">
      <span className="showpage__pagetitle--date">{date}</span>
      {' '}
      {event && <span className="showpage__pagetitle--event">{event}</span>}
      {' '}
      {show.venue && <span className="showpage__pagetitle--venue">{show.venue.name}, {show.venue.location}</span>}
    </h1>
    <section className="showpage__setlist">
      <Guests guests={showGuests} />
      {show.soundcheck && <Set which="soundcheck" show={show} performances={performances} sets={sets} segues={segues} teases={teases} songs={songs} />}
      {setlist.length ? setlist : <p>Uh oh, no sets found.</p>}
      {encores.length && encores}
      {notes && <div className="showpage__notes">{notes}</div>}
    </section>
  </div>
}

export const query = graphql`
  query($showId: String!) {
    ShowsCsv(jsonId: {eq: $showId}) {
      jsonId
      date
      event
      notes
      venue {
        jsonId
        location
        name
      }
    }
    allSetsCsv { nodes {
      jsonId
      setlist
    }}
    allGuestsCsv { nodes {
      jsonId
      name
      shows
    } }
    allSongperformancesCsv { nodes {
      jsonId
      notes
      showgap
      song { jsonId }
      variation
    } }
    allSongsCsv { nodes {
      jsonId
      author
      core_gd
      core_jrad
      suite
      title
    } }
    allSeguesCsv { nodes {
      jsonId
      from_perf_id
      type
    } }
    allTeasesCsv { nodes {
      jsonId
      performance { jsonId }
      song_name
    } }
  }
`
