import React from 'react'
import classnames from 'classnames'

import './segue.css'

/**
 * Show a visual indication of the type of segue.
 * http://beta.phish.net/faq/segues
 */
export default function Segue({className = '', type}) {
  const cssClasses = classnames(className, 'segue', {
    'segue--std': type === '>',
    'segue--smooth': type === '->',
  })
  // ripcord... ≯
  return <span className={cssClasses}>{type}</span>
}
