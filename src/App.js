import * as Sentry from '@sentry/browser';
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import {releaseStage} from './release-stages'
import {Error, Home, Show, Song} from './pages'
import routes from './routes'

import './App.css'

function determineRelease() {
  if (process.env.GIT_SHA && process.env.GIT_SHA.length) {
    return process.env.GIT_SHA
  }
  if (process.env.NODE_ENV === 'development') {
    return 'develop'
  }
  return 'unknown'
}

Sentry.init({
  dsn: 'https://174349d7133f4877ba279f589bf54642@o412799.ingest.sentry.io/5293476',
  environment: releaseStage(),
  release: determineRelease(),
})

function App() {
  return <>
    <div className={`App ${releaseStage()}`}>
      <a id="logo" href="#"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <HashRouter>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.show}       component={Show} />
          <Route path={routes.song}       component={Song} />
          <Route path={routes.anyPath}    component={Error} />
        </Switch>
      </HashRouter>
    </div>
    <footer id="site-footer">
      Contributions / corrections:
      <br />
      <a href="https://twitter.com/AlmostDeadNet" target="_new" rel="noopener noreferrer">@AlmostDeadNet on Twitter</a>
    </footer>
  </>
}

export default App
