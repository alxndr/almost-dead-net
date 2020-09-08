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
          <Route path={routes.show} exact component={Show} />
          <Route path={routes.songWithName} component={Song} />
          <Route path={routes.song} exact   component={Song} />
          <Route path={routes.anyPath} component={Error} />
        </Switch>
      </HashRouter>
    </div>
    <footer id="site-footer">
      Corrections? Contributions?
      <br />
      Contact: <a href="https://twitter.com/AlmostDeadNet" target="_new" rel="noopener noreferrer">@AlmostDeadNet on Twitter</a>
    </footer>
  </>
}

export default App
