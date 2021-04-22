import React from 'react'
import {Tooltip} from 'react-tippy'

export default function BustOutBadge({showgap}) {
  if (showgap >= 50) {
    return <Tooltip title={`bust-out! hadn't been played for ${showgap} shows`} trigger="mouseenter focus click">
      <span className="setlist__track__badge setlist__track__badge--bustout" aria-label="notes" role="img">‼️
        <span className="hidden">{`bust-out! hadn't been played for ${showgap} shows`}</span>
      </span>
    </Tooltip>
  }
  return false
}
