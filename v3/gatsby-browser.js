/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const {hydrate} = require('react-dom')
const {loadableReady} = require('@loadable/component')

exports.disableCorePrefetching = () => true

exports.replaceHydrateFunction = () => (element, container, callback) => {
  loadableReady(() => {
    hydrate(element, container, callback)
  })
}

exports.onRouteUpdate = () => {
  // h/t @samblackk https://github.com/gatsbyjs/gatsby/issues/10410#issuecomment-739031719
  window.locations = window.locations || [document.referrer];
  if (window.locations[locations.length - 1] !== window.location.href) {
    window.locations.push(window.location.href);
  }
  window.previousPath = window.locations[locations.length - 2];
}
