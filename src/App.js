import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Home, About} from './pages'
import './App.css';

function isProduction(glbl) {
  return document && document.location && document.location.hostname &&
    (document.location.hostname === 'almost-dead.net' || document.location.hostname === 'alxndr.github.io')
}

function App() {
  return (
    <div className={`App ${isProduction() ? 'prod' : ''}`}>
      <a id="logo" href="/"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></a>
      <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </>
      </Router>
      <footer id="site-footer">Contributions / corrections: <a href="https://twitter.com/AlmostDeadNet" target="_new">@AlmostDeadNet on Twitter</a></footer>
    </div>
  );
}

export default App;
