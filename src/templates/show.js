import React from 'react'
import {filter, find, includes, propEq, sort, where} from 'ramda'
import {graphql, Link} from 'gatsby'
import slugify from 'slugify'

import {objectSorterFactory} from '../helpers/array_helpers'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Setlist from '../components/setlist'
import Recording from '../components/recording'

import {normalizeSetlist} from '../components/helpers/setlist-helper'

import './show.css'

const AUDIO_TYPES = ['matrix', 'soundboard', 'audience']
const isAudioRecording = ({type}) => AUDIO_TYPES.includes(type)

function ShowRecordings({date, recordings}) {
  function isAudioAvailable() {
    return Boolean(recordings.filter(isAudioRecording).length)
  }
  if (recordings.length) {
    const [m, d, yyyy] = date.split('/')
    return <section className="showpage__recordings">
      <h2>Recordings</h2>
      <ul>
        {recordings.map(({type, url}) => <Recording type={type} url={url} key={url} />)}
        {isAudioAvailable() && <Recording type={'audio'} url={`https://relisten.net/jrad/${yyyy}/${m < 10 ? `0${m}` : m}/${d < 10 ? `0${d}` : d}`} />}
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

function Set({show, shows, which, isEncore = false, sets, performances, segues, teases, songs, previousUrl}) {
  const what = which === 'soundcheck'
    ? 'soundcheck'
    : `${isEncore ? 'encore' : 'set'}${which}`
  const setId = show[what]
  if (!setId || !(sets?.length)) {
    return false
  }
  const setData = find(propEq('id', setId))(sets)
  const setlist = normalizeSetlist(setData.setlist)
  return <Setlist
    showId={show.id}
    isEncore={isEncore}
    which={which}
    key={setData.id}
    setlist={setlist}
    performances={performances}
    segues={segues}
    songs={songs}
    teases={teases}
    allSets={sets}
    allShows={shows}
    previousUrl={previousUrl}
  />
}

function isImage(url) {
  return url.startsWith('https://lot.almost-dead.net/uploads/') || url.match(/\bimgur\b/)
}

const recordingsSorter = objectSorterFactory('type', [
  'pro-shot',
  'matrix',
  'soundboard',
  'audience',
  'video',
  'audio',
  'unknown',
])

export const query = graphql`
  query($showId: String!) {
    showsCsv(fields: {id: {eq: $showId}}) {
      id
      notes
    }
    allShowsCsv { nodes {
      id
    }}
    allSetsCsv { nodes {
      id
    }}
    allGuestsCsv { nodes {
      id
    } }
    allSongperformancesCsv { nodes {
      id
      notes
      song { id }
      stars
      variation
    } }
    allSongsCsv { nodes {
      id
    } }
    allSeguesCsv { nodes {
      id
      type
    } }
    allTeasesCsv { nodes {
      id
      song_name
    } }
    allRecordingsCsv(filter: {show: {id: {eq: $showId}}}) { nodes {
      id
      show { id }
      type
      url
    } }
  }
`

export default function Show({
  pageContext: {lastShowId},
  data: {
    showsCsv: show,
    allSetsCsv: {nodes: sets},
    allGuestsCsv: {nodes: guests},
    allRecordingsCsv: {nodes: recordings},
    allSongperformancesCsv: {nodes: performances},
    allSeguesCsv: {nodes: segues},
    allSongsCsv: {nodes: songs},
    allTeasesCsv: {nodes: teases},
    allShowsCsv: {nodes: shows},
  },
  location
}) {
  if (!show) {
    global.console.error('Show page, missing show..............')
    return false
  }

  const {date, event, notes, links, tagline} = show

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

  const showRecordings = sort(recordingsSorter)(recordings)

  const setlist = [1, 2, 3].reduce((setlists, which) => setlists.concat(
    <Set
      which={which}
      show={show}
      performances={performances}
      sets={sets}
      segues={segues}
      teases={teases}
      songs={songs}
      key={`set${which}`}
      previousUrl={location?.state?.previousUrl}
      shows={shows}
    />
  ), [])
  const encores = [1, 2].reduce((encores, which) => encores.concat(
    <Set
      isEncore={true}
      which={which}
      show={show}
      performances={performances}
      sets={sets}
      segues={segues}
      teases={teases}
      songs={songs}
      key={`encore${which}`}
      previousUrl={location?.state?.previousUrl}
      shows={shows}
    />
  ), [])

  const linksArray = links.split(/\s+/)

  const guestsDescription = showGuests.length
    ? `with ${showGuests.map(({name}) => name).join(' and ')}`
    : ''
  const seoDescription = `Setlist and recordings of Joe Russo's Almost Dead ${guestsDescription} ${date} at ${event ? `${event}, ` : ``}${show.venue.name} (${show.venue.location}) including song segues, teases, and show notes`
  const imageSrcs = filter(isImage)(linksArray)

  const showId = Number(show.id)
  return <Layout className="showpage">
    <SEO
      title={`JRAD ${tagline}`}
      description={seoDescription}
      image={imageSrcs.length && imageSrcs[0]}
    />

    <h1 className="showpage__pagetitle">
      <span className="showpage__pagetitle--band">Joe Russo's Almost Dead</span>
      {' '}
      <span className="showpage__pagetitle--date">{date}</span>
      {' '}
      {event && <span className="showpage__pagetitle--event">{event}</span>}
      {' '}
      {show.venue && <span className="showpage__pagetitle--venue">
        {' '}
        <Link to={`/venue/${show.venue.id}-${slugify(show.venue.name)}`}>
          {show.venue.name}, {show.venue.location}
        </Link>
      </span>}
    </h1>
    <section className="showpage__setlist">
      {notes && <div className="showpage__notes">{notes}</div>}
      <Guests guests={showGuests} />
      {show.soundcheck &&
        <Set
          which="soundcheck"
          show={show}
          performances={performances}
          sets={sets}
          segues={segues}
          teases={teases}
          songs={songs}
          previousUrl={location?.state?.previousUrl}
          shows={shows}
        />}
      {setlist.length ? setlist : <p>Uh oh, no sets found.</p>}
      {encores.length && encores}
      {imageSrcs.length
        ? <div className="showpage__leadimage">{imageSrcs.map((imageSrc) => <img key={imageSrc} src={imageSrc} alt="a poster or photograph from the show" />)}</div>
        : null
      }
    </section>
    <ShowRecordings recordings={showRecordings} date={date} />
    <nav className="showpage__nav">
      {showId > 1 && <a href={`/show/${showId - 1}`} className="showpage__nav__prev" title="previous show">Prior show</a>}
      {showId < Number(lastShowId) && <a href={`/show/${showId + 1}`} className="showpage__nav__next" title="following show">Next show</a>}
    </nav>
  </Layout>
}
