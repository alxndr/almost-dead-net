import React, {useEffect, useState} from 'react'
import {filter, find, includes, propEq, sort, where} from 'ramda'
import {Link} from 'gatsby'
import slugify from 'slugify'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Setlist from '../components/setlist'
import Recording from '../components/recording'

import './show.css'

export function normalizeSetlist(rawSetlistValue) {
  return typeof rawSetlistValue === "number"
    ? [rawSetlistValue]
    : typeof rawSetlistValue === "string"
      ? rawSetlistValue.split(':')
      : []
}

function ShowRecordings({date, recordings}) {
  if (recordings.length) {
    const [m, d, yyyy] = date.split('/')
    return <section className="showpage__recordings">
      <h2>Recordings</h2>
      <ul>
        {recordings.map(({type, url}) => <Recording type={type} url={url} />)}
        {Boolean(recordings.filter(({type}) => ['matrix', 'soundboard'].includes(type)).length) &&
          <Recording type={'audio'} url={`https://relisten.net/jrad/${yyyy}/${m < 10 ? `0${m}` : m}/${d < 10 ? `0${d}` : d}`} />
        }
      </ul>
    </section>
  }
  return false
}

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
  const setData = find(propEq('id', setId))(sets)
  const setlist = normalizeSetlist(setData.setlist)
  return <Setlist
    isEncore={isEncore}
    which={which}
    key={setData.id}
    setlist={setlist}
    performances={performances}
    segues={segues}
    songs={songs}
    teases={teases}
  />
}

function LeadImage({urls}) {
  const src = find((url) => url.startsWith('https://lot.almost-dead.net/uploads/') || url.match(/imgur/))(urls)
  return <div className="showpage__leadimage">
    <img src={src} />
  </div>
}

export default function Show({pageContext: {show, shows, sets, venue, guests, recordings, performances, segues, songs, teases, lastShowId}}) {
  if (!show) {
    console.error('Show page, missing show..............')
    return false
  }

  const {date, event, notes, links} = show

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
  const showGuests = filter(where({shows: includes(show.id)}))(guestsWithSplitShows)

  const showRecordings = sort((a, b) => {
    if (a.type === b.type) return 0;
    if (a.type === 'pro-shot') return -1;
    if (b.type === 'pro-shot') return 1;
    if (a.type === 'matrix') return -1;
    if (b.type === 'matrix') return 1;
    if (a.type === 'video') return -1;
    if (b.type === 'video') return 1;
    if (a.type === 'soundboard') return -1;
    if (b.type === 'soundboard') return 1;
    if (a.type === 'audience') return -1;
    if (b.type === 'audience') return 1;
    console.error('cannot sort recordings......', {a, b})
  }, recordings)

  const setlist = [1, 2, 3].reduce((setlists, which) => setlists.concat(
    <Set which={which} show={show} performances={performances} sets={sets} segues={segues} teases={teases} songs={songs} />
  ), [])
  const encores = [1, 2].reduce((encores, which) => encores.concat(
    <Set isEncore={true} which={which} show={show} performances={performances} sets={sets} segues={segues} teases={teases} songs={songs} />
  ), [])

  const showName = `${event ? `${event}, ` : ``}${venue.name} (${venue.location})`

  return <Layout className="showpage">
    <SEO
      title={`JRAD ${date} @ ${showName}`}
      description={`Joe Russo's Almost Dead${showGuests.length ? ` with ${showGuests.map((guest) => guest.name).join(' and ')}` : ''} at ${showName} ${date} — setlist, teases, recordings`}
    />
    <h1 className="showpage__pagetitle">
      <span className="showpage__pagetitle--band">Joe Russo's Almost Dead</span> {' '}
      <span className="showpage__pagetitle--date">{date}</span> {' '}
      {event && <span className="showpage__pagetitle--event">{event}</span>} {' '}
      {venue && <span className="showpage__pagetitle--venue"> {' '}
        <Link to={`/venue/${venue.id}-${slugify(venue.name)}`}>
          {venue.name}, {venue.location}
        </Link>
      </span>} {' '}
      <span className="showpage__pagetitle--number">show #{show.id}</span>
    </h1>
    <section className="showpage__setlist">
      {links && <LeadImage urls={links.split(/\s+/)} />}
      {notes && <div className="showpage__notes">{notes}</div>}
      <Guests guests={showGuests} />
      {show.soundcheck && <Set which="soundcheck" show={show} performances={performances} sets={sets} segues={segues} teases={teases} songs={songs} />}
      {setlist.length ? setlist : <p>Uh oh, no sets found.</p>}
      {encores.length && encores}
    </section>
    <ShowRecordings recordings={showRecordings} date={date} />
    <nav className="showpage__nav">
      {Number(show.id) > 1 && <a href={`/show/${Number(show.id) - 1}`} className="showpage__nav__prev" title="previous show">Prior show</a>}
      {Number(show.id) < Number(lastShowId) && <a href={`/show/${Number(show.id) + 1}`} className="showpage__nav__next" title="following show">Next show</a>}
    </nav>
  </Layout>
}
