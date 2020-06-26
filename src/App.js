import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {releaseStage} from './release-stages'
import {Home, Show} from './pages'
import routes from './routes'

import './App.css'

function Error() {
  return <>
    <h1>Uh oh! Error</h1>
  </>
}

function App() {
  console.log({routes})
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
    <footer id="site-footer">Contributions / corrections: <a href="https://twitter.com/AlmostDeadNet" target="_new">@AlmostDeadNet on Twitter</a></footer>
  </>
}

export default App
