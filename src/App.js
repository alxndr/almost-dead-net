import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import {Home, Show} from './pages'
import './App.css'

function isProduction(glbl) {
  return document && document.location && document.location.hostname &&
    (document.location.hostname === 'almost-dead.net' || document.location.hostname === 'alxndr.github.io')
}

function Error() {
  return <>
    <h1>Uh oh!</h1>
    <p>Error... Please visit the <Link to="/">home page</Link> and try again.</p>
    <p><samp>TODO:</samp> figure out how to 301-redirect?</p>
  </>
}

function App() {
  return <>
    <div className={`App ${isProduction() ? 'prod' : ''}`}>
      <a id="logo" href="/"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/show/:id" component={Show} />
          <Route path="/:path" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
    <footer id="site-footer">Contributions / corrections: <a href="https://twitter.com/AlmostDeadNet" target="_new">@AlmostDeadNet on Twitter</a></footer>
  </>
}

export default App
