import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header style={{}}>
    <Link className="App__banner" to="/" title="Almost-Dead.net home page">
      <img src="https://i.imgur.com/q5cBEHG.png" alt="ALmost-Dead.net banner" />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
