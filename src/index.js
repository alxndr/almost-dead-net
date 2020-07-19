import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

// serviceWorker provides hot reloading...
import * as serviceWorker from './serviceWorker'

import {determineRelease, releaseStage} from './release-stages'
import * as Sentry from '@sentry/browser'
import LogRocket from 'logrocket'

LogRocket.init('wi3hyr/a-dn')

Sentry.init({
  dsn: 'https://174349d7133f4877ba279f589bf54642@o412799.ingest.sentry.io/5293476',
  environment: releaseStage(),
  release: determineRelease(),
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
