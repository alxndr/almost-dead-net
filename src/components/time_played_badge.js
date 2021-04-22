import React from 'react'
import {Tooltip} from 'react-tippy'

export default function TimePlayedBadge({prevPerf, nextPerf}) {
  if (!prevPerf && !nextPerf) {
    return <Tooltip title="only time played" trigger="mouseenter focus click">
      <span className="setlist__track__badge setlist__track__badge--otp" aria-label="notes" role="img">⁕
        <span className="hidden">only time played</span>
      </span>
    </Tooltip>
  }
  if (prevPerf && !nextPerf) {
    return <Tooltip title="last time played" trigger="mouseenter focus click">
      <span className="setlist__track__badge setlist__track__badge--ltp" aria-label="notes" role="img">𝛀
        <span className="hidden">last time played</span>
      </span>
    </Tooltip>
  }
  if (!prevPerf && nextPerf) {
    return <Tooltip title="first time played" trigger="mouseenter focus click">
      <span className="setlist__track__badge setlist__track__badge--ftp" aria-label="notes" role="img">🆕
        <span className="hidden">first time played</span>
      </span>
    </Tooltip>
  }
  return false
}
