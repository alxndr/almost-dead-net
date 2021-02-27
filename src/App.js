import React, {Suspense} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {releaseStage} from './release-stages'
import {
  About,
  Error,
  Home,
  Show,
  Song
} from './pages'
import routes from './routes'

import './App.css'

function App() {
  console.log('component: App (with Suspense & BrowserRouter)')
  return <Suspense fallback={<h2>Loading... [{releaseStage()}]</h2>}>
    <div className={`App ${releaseStage()}`}>
      <a id="logo" href="/" title="return to home page"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <BrowserRouter>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.about} exact component={About} />
          <Route path={routes.show} exact component={Show} />
          <Route path={routes.songWithName} component={Song} />
          <Route path={routes.song} exact   component={Song} />
          <Route path={routes.anyPath} component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
    <footer id="site-footer" className="footer">
      <a className="footer__logo" id="logo-bottom" href="/" title="return to home page"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <a className="footer__link-about" href="/about" title="About the Site">About the Site</a>
      <a className="footer__logo-lot" href="https://lot.almost-dead.net" title="JRAD Forum — The Lot"><img src="https://i.imgur.com/Qi2NhJO.png" alt="The Lot — a forum for fans of Joe Russo's Almost Dead" /></a>
    </footer>
  </Suspense>
}

export default App
