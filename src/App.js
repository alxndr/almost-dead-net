import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {Home, Show} from './pages'
import './App.css'

const STAGES = {
  CANARY: 'canary',
  DEV: 'dev',
  PROD: 'prod',
  UNKNOWN: 'unknown',
}

function releaseStage() {
  if (!document || !document.location || !document.location.hostname)
    return STAGES.UNKNOWN
  switch (document.location.hostname) {
    case 'almost-dead.net':
      return STAGES.PROD
    case 'alxndr.github.io':
      return STAGES.CANARY
    case 'localhost':
      return STAGES.DEV
    default:
      return STAGES.UNKNOWN
  }
}

function Error() {
  return <>
    <h1>Uh oh! Error</h1>
  </>
}

function App() {
  const URL_ROUTING_BASE = releaseStage() === 'canary'
    ? '/almost-dead-net' // https://alxndr.github.io/almost-dead-net
    : '/'
  console.log({URL_ROUTING_BASE})
  return <>
    <div className={`App ${releaseStage()}`}>
      <a id="logo" href={URL_ROUTING_BASE}><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <BrowserRouter>
        <Switch>
          <Route path={URL_ROUTING_BASE} exact component={Home} />
          <Route path={`${URL_ROUTING_BASE}show/:id`} component={Show} />
          <Route path={`${URL_ROUTING_BASE}:path`} component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
    <footer id="site-footer">Contributions / corrections: <a href="https://twitter.com/AlmostDeadNet" target="_new">@AlmostDeadNet on Twitter</a></footer>
  </>
}

export default App
