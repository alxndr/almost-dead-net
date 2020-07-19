import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import {releaseStage} from './release-stages'
import {Error, Home, Show, Song} from './pages'
import routes from './routes'

import './App.css'

function App() {
  return <>
    <div className={`App ${releaseStage()}`}>
      <a id="logo" href="?#" title="return to home page"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
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
      Contributions / corrections / design advice:
      <br />
      <a href="https://twitter.com/AlmostDeadNet" target="_new" rel="noopener noreferrer">@AlmostDeadNet on Twitter</a>
    </footer>
  </>
}

export default App
