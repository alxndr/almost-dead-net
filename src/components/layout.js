import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import {releaseStage} from '../release-stages'

import Header from './header'

import './reset.css'
import './layout.css'

const Layout = ({children, className = ''}) => {
  const data = {site: {siteMetadata: {title: 'a title.....'}}}
  //const data = useStaticQuery(graphql`
  //  query SiteTitleQuery {
  //    site {
  //      siteMetadata {
  //        title
  //      }
  //    }
  //  }
  //`)

  return (
    <div className={`layout layout-${releaseStage()} ${className}`}>
      <Header siteTitle={data.site.siteMetadata?.title || ''} />
      <main>{children}</main>
      <footer id="site-footer" className="footer">
        <Link className="footer__logo" id="logo-bottom" to="/" title="return to home page"><img src="https://i.imgur.com/tvtgYVY.png" alt="Good Ol' Almost Dead" /></Link>
        <Link className="footer__link-about" to="/about" title="About the Site">About the Site</Link>
        <Link className="footer__logo-lot" to="https://lot.almost-dead.net" title="JRAD Forum — The Lot"><img src="https://i.imgur.com/Qi2NhJO.png" alt="The Lot — a forum for fans of Joe Russo's Almost Dead" /></Link>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
