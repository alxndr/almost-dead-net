import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'

import Autosuggest from 'react-autosuggest'

import {
  SONGS_URL,
} from '../data'
import {parseWithCache} from '../fetch'
import routes, {url} from '../routes'

import './song_finder.css'

const REGEX_NON_ALNUMSPACE = /[^a-z0-9 ]+/g
const REGEX_WORD_SEPARATING_PUNCTUATION = /[-—/–+,()[\]{}…]+/g
function sanitizeString(string) {
  return string
    .toLowerCase()
    .replace(REGEX_WORD_SEPARATING_PUNCTUATION, ' ')
    .replace(REGEX_NON_ALNUMSPACE, '')
    .trim()
}

export default function SongFinder(props) {
  const [songs, setSongs] = useState(null)
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [redirect, setRedirect] = useState(null)
  useEffect(() => {
    parseWithCache(SONGS_URL, setSongs)
  }, [])
  if (redirect) {
    return <Redirect push to={redirect} />
  }
  if (!songs || !songs.length) {
    return <p>Loading...</p>
  }
  const getSuggestions = (string) => {
    if (!string) {
      return []
    }
    const searchString = sanitizeString(string)
    if (!searchString || searchString.length < 2) {
      return []
    }
    const searchRegex = new RegExp(`\\b${searchString}`)
    return songs.filter(({title = '', author = ''}) => {
      if (title && searchRegex.test(sanitizeString(title))) {
        return true
      }
      if (author && searchRegex.test(sanitizeString(author))) {
        return true
      }
      return false
    })
  }
  const renderSuggestion = (songData) => {
    const author = songData.author
      ? <span className="songfinder__suggestion--author">{songData.author}</span>
      : false
    return <span className="songfinder__suggestion">
      {songData.title}
      {author}
    </span>
  }
  return <div className="songfinder">
    <Autosuggest
      suggestions={suggestions}
      highlightFirstSuggestion={true}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({value}) => {
        setValue(value)
        setSuggestions(getSuggestions(value))
      }}
      getSuggestionValue={(songData) => songData.title}
      renderSuggestion={renderSuggestion}
      inputProps={{
        onChange: (_, {newValue}) => setValue(newValue),
        placeholder: 'type a song name',
        value,
      }}
      onSuggestionSelected={(_, {suggestion}) => {
        setRedirect(url(routes.song, {id: suggestion.id}))
      }}
    />
  </div>
}
