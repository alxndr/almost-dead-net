import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

import Header from './header'

import './reset.css'
import './layout.css'

const Layout = ({children, className = ''}) => {
  return (
    <div className={`layout ${className}`}>

      <Header />

      <main>
        {children}
      </main>

      <footer>
        <Link className="footer__home" to="/" title="return to home page">
          Home
        </Link>
        <Link className="footer__link-about" to="/about" title="About the Site">
          About
        </Link>
      </footer>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
