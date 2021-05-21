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
