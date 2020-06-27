import * as Sentry from '@sentry/browser';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {releaseStage} from './release-stages'
import {Error, Home, Show} from './pages'
import routes from './routes'

import './App.css'

Sentry.init({dsn: "https://174349d7133f4877ba279f589bf54642@o412799.ingest.sentry.io/5293476"});

function App() {
  // console.log('routes...', routes)
  return <>
    <div className={`App ${releaseStage()}`}>
      <a id="logo" href={routes.home}><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <BrowserRouter>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.show}       component={Show} />
          <Route path={routes.anyPath}    component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
    <footer id="site-footer">
      Contributions / corrections:
      <br />
      <a href="https://twitter.com/AlmostDeadNet" target="_new" rel="noopener noreferrer">@AlmostDeadNet on Twitter</a>
    </footer>
  </>
}

export default App
