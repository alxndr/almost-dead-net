import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/*<SEO title="Home" />*/}
    <section className="homepage__news">
      <p><em>New!!</em> visit <a href="//lot.almost-dead.net" title="JRAD Forum: The Lot" style={{fontWeight:'bold'}}>The Lot</a> to discuss all things Joe Russo's Almost Dead!</p>
      <p>Coming eventually...</p>
      <ul>
        <li>easier navigation??</li>
        <li>more teases!</li>
        <li>fun stats</li>
        <li><a href="https://lot.almost-dead.net/t/suggestions-for-the-main-site/18" title="leave a suggestion">your suggestions!</a></li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
