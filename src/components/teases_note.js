import React from 'react'

import {Tooltip} from 'react-tippy'

export default function TeasesNote({list}) {
  const teases = `Tease(s): ${list.map(({song_name}) => song_name).join(', ')}`
  return <Tooltip title={teases} trigger="mouseenter focus click">
    <span className="setlist__songteases" aria-label="notes" role="img">🎧
      <span className="hidden">{teases}</span>
    </span>
  </Tooltip>
}
