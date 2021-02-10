import React from 'react'

export default function Recording({type, url}) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">{type}</a>
    </li>
  )
}
