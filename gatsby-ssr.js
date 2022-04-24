/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { ChunkExtractor } from '@loadable/server'
import path from 'path'


// extractor.collectChunks() will wrap the application in a ChunkExtractorManager
export const wrapRootElement = ({ element }) =>
  extractor.collectChunks(element)

export const onRenderBody = () => {
  // Reset collected chunks after each page is rendered
  extractor.chunks = []
}
