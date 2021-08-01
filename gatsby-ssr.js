/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { ChunkExtractor } from '@loadable/server'
import path from 'path'

const extractor = new ChunkExtractor({
  // Read the stats file generated by webpack loadable plugin.
  statsFile: path.resolve('./public/loadable-stats.json'),
  entrypoints: [],
})

// extractor.collectChunks() will wrap the application in a ChunkExtractorManager
export const wrapRootElement = ({ element }) =>
  extractor.collectChunks(element)

export const onRenderBody = () => {
  // Set link rel="preload" tags in the head to start the request asap. This will NOT parse the assets fetched
  console.debug(`setHeadComponents(extractor.getLinkElements())`)

  // Set script and style tags at the end of the document to parse the assets.
  console.debug(`setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()])`)

  // Reset collected chunks after each page is rendered
  extractor.chunks = []
}