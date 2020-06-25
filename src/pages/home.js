import React, {useState, useEffect} from 'react'
import Papa from 'papaparse'

import {SHOWS_URL} from '../data'

export default function Home(props) {
  const [showsParsed, setShowsParsed] = useState(null);
  useEffect(() => {
    Papa.parse(SHOWS_URL, {
      complete: ({data, errors, meta}) => {
        if (errors.length)
          throw new Error('Ruh roh', {data, errors, meta})
        setShowsParsed(data)
      },
      download: true,
      header: true,
      worker: true,
    })
  }, [])
  global.console.log("shows...", showsParsed);
  return <>
    <h1>Almost-Dead.net</h1>
    {showsParsed
      ? <pre>{Object.keys(showsParsed).join(', ')}</pre>
      : <p>Loading...</p>
    }
  </>;
}
