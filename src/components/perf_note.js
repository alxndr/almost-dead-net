import React from 'react'

import {Tooltip} from 'react-tippy'

export default function PerfNote({notes}) {
  return <Tooltip title={notes} trigger="mouseenter focus click">
    <span className="setlist__songnote" aria-label="notes" role="img">📓
      <span className="hidden">{notes}</span>
    </span>
  </Tooltip>
}
