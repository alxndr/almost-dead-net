import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import {Home, Show} from './pages'
import './App.css'

function releaseStage() {
  if (!document || !document.location || !document.location.hostname)
    return 'unknown'
  switch (document.location.hostname) {
    case 'almost-dead.net':
      return 'prod'
    case 'alxndr.github.io':
      return 'canary'
    case 'localhost':
      return 'dev'
    default:
      return 'unknown'
  }
}

function Error() {
  return <>
    <h1>Uh oh!</h1>
    <p>Error... Please visit the <Link to="/">home page</Link> and try again.</p>
    <p><samp>TODO:</samp> figure out how to 301-redirect?</p>
  </>
}

function App() {
  const URL_ROUTING_BASE = releaseStage() === 'canary'
    ? '/almost-dead-net' // https://alxndr.github.io/almost-dead-net
    : '/'
  return <>
    <div className={`App ${releaseStage()}`}>
      <a id="logo" href="/"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
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
