import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Autosuggest from 'react-autosuggest'

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

export default function SongFinder() {
  const {
    allSongsCsv: {nodes: songs}
  } = useStaticQuery(graphql`
    query SongFinderData {
      allSongsCsv { nodes {
        id
        author
        core_gd
        core_jrad
        cover_gd
        id
        nicknames
        performances
        suite
        title
      } }
    }
  `)
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
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
        window.location = `/song/${suggestion.id}`
        //setRedirect(url(routes.song, {id: suggestion.id}))
      }}
    />
  </div>
}
