import React from 'react'

import './recording.css'

const REGEX_YTID_PARAM = /[?&]v=([\w-]+)/
const REGEX_YTID_SHORTURL = /\/\/youtu\.be\/([\w-]+)/

function extractYoutubeId(url) {
  if (!url.length || !url.match) {
    return false
  }
  const matchParam = url.match(REGEX_YTID_PARAM)
  if (matchParam && matchParam[1]) {
    return matchParam[1]
  }
  const matchShortUrl = url.match(REGEX_YTID_SHORTURL)
  if (matchShortUrl && matchShortUrl[1]) {
    return matchShortUrl[1]
  }
  return false
}

function determineEmbed(url) {
  const ytId = extractYoutubeId(url)
  if (ytId) {
    return <iframe
      title="video of the show"
      width="380"
      src={`https://www.youtube.com/embed/${ytId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  }
  if (url.startsWith('https://archive.org/')) {
    const embedUrl = url.replace('/details/', '/embed/')
    return <iframe
      title="audio of the show"
      src={`${embedUrl}?playlist=1`}
      width="380"
      height="250"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      ></iframe>
  }
  return <span>(from {new URL(url).host.replace('www.', '')})</span>
}

export default function Recording({type, url}) {
  if (!url) return false
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">{type}</a>
      {determineEmbed(url)}
    </li>
  )
}
