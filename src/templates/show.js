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
  const howMany = guests.length
  if (howMany) {
    const lastIndex = howMany - 1
    const allButLastGuest = guests.slice(0, lastIndex)
    const lastGuest = guests[lastIndex]
    return <p>With {allButLastGuest.map((guest) => guest.name).join(', ')}
      {howMany >= 3 && ',' /* what up Oxford */}
      {howMany >= 2 && ' and '}
      {lastGuest.name}
    </p>
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
  return url.startsWith('https://lot.almost-dead.net/uploads/') ||
    url.startsWith('https://archive.org/download/') ||
    url.match(/\bimgur\b/)
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
  query($showId: String!, $venueId: String!) {
    showsCsv(id: {eq: $showId}) {
      id
      date
      encore1
      encore2
      event
      links
      notes
      set1
      set2
      set3
      soundcheck
      tagline
    }
    venuesCsv(id: {eq: $venueId}) {
      id
      location
      name
    }
    allShowsCsv { nodes {
      id
      encore1
      encore2
      set1
      set2
      set3
      soundcheck
    }}
    allSetsCsv { nodes {
      id
      setlist
    }}
    allGuestsCsv { nodes {
      id
      name
      shows
    } }
    allSongperformancesCsv { nodes {
      id
      next_perfid
      notes
      prev_perfid
      showgap
      song_id
      variation
      stars
    } }
    allSongsCsv { nodes {
      id
      author
      core_gd
      core_jrad
      suite
      title
    } }
    allSeguesCsv { nodes {
      id
      from_perf_id
      type
    } }
    allTeasesCsv { nodes {
      id
      performance_id
      song_name
    } }
    allRecordingsCsv(filter: {show: {eq: $showId}}) { nodes {
      id
      type
      url
    } }
  }
`

export default function Show({
  pageContext: {lastShowId},
  data: {
    showsCsv: show,
    venuesCsv: venue,
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
  const day = new Date(date).toString().slice(0,3)

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
    ? `with ${showGuests.map(({name}) => name).join(' and ')} `
    : ' '
  const seoDescription = `Setlist and recordings of Joe Russo's Almost Dead ${guestsDescription}${date} at ${event ? `${event}, ` : ``}${venue.name} (${venue.location}) including song segues, teases, and show notes`
  const imageSrcs = filter(isImage)(linksArray)

  const showId = Number(show.id)
  return <Layout className="showpage" itemScope itemType="http://schema.org/MusicEvent">
    <SEO
      title={`JRAD ${guestsDescription} — ${tagline}`}
      description={seoDescription}
      image={imageSrcs.length && imageSrcs[0]}
    />

    <h1 className="showpage__pagetitle" itemProp="name">
      <span className="showpage__pagetitle--band" itemProp="performer">Joe Russo's Almost Dead</span>
      {' '}
      <span className="showpage__pagetitle--date" itemProp="">{day} {date}</span>
      {' '}
      {event && <span className="showpage__pagetitle--event" itemProp="superEvent">{event}</span>}
      {' '}
      {venue && <span className="showpage__pagetitle--venue" itemProp="location" itemScope itemType="https://schema.org/Place">
        {' '}
        <Link to={`/venue/${venue.id}-${slugify(venue.name)}`}>
          <span itemProp="name">{venue.name}</span>, {venue.location}
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
      <p className="showpage__corrections">
        <span>Something wrong or missing?</span>
        <span>Please <a href="https://lot.almost-dead.net/t/setlist-corrections/17" target="_blank">let us know</a>!</span>
      </p>
    </section>
    {imageSrcs.length
      ? <section className="showpage__leadimage">{imageSrcs.map((imageSrc) => <img key={imageSrc} src={imageSrc} alt="a poster or photograph from the show" />)}</section>
      : null
    }
    <ShowRecordings recordings={showRecordings} date={date} />
    <nav className="showpage__nav">
      {showId > 1 && <a href={`/show/${showId - 1}`} className="showpage__nav__prev" title="previous show">Prior show</a>}
      {showId < Number(lastShowId) && <a href={`/show/${showId + 1}`} className="showpage__nav__next" title="following show">Next show</a>}
    </nav>
  </Layout>
}
