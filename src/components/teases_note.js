import React from 'react'

import {Tooltip} from 'react-tippy'

export default function TeasesNote({list}) {
  const teases = list.map(({song_name}) => song_name).join(', ')
  const text = `${teases} tease${list.length > 1 ? 's' : ''}`
  return <Tooltip title={text} trigger="mouseenter focus click">
    <span className="setlist__songteases" aria-label="notes" role="img">🎧
      <span className="hidden">{text}</span>
    </span>
  </Tooltip>
}
