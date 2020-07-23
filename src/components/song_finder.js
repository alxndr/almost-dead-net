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
function sanitizeString(string) {
  return string.toLowerCase().replace(REGEX_NON_ALNUMSPACE, '').trim()
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
    return songs.filter(({title}) => title && sanitizeString(title).includes(searchString))
  }
  const renderSuggestion = (suggestion) => <>{suggestion.title}</>
  return <div className="songfinder">
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({value}) => {
        setValue(value)
        setSuggestions(getSuggestions(value))
      }}
      getSuggestionValue={(suggestion) => suggestion.id.toString()}
      renderSuggestion={renderSuggestion}
      inputProps={{
        onChange: (_, {newValue}) => setValue(newValue),
        placeholder: 'type a song name',
        value,
      }}
      onSuggestionSelected={(_, {suggestionValue}) => {
        setRedirect(url(routes.song, {id: suggestionValue}))
      }}
    />
  </div>
}
