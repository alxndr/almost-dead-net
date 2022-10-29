import * as React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import {Helmet} from 'react-helmet'

import icon from '../images/icon-almost-dead.png'

import './reset.css'
import './layout.css'

const toTag = (TagName, index) => (props) => <TagName key={`${index}-${TagName}`} {...props} />

const Layout = ({children, className = '', description, image, lang = 'en', meta, title}) => {
  const {site} = useStaticQuery(graphql`
    query LayoutData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const linktags = [
    {rel: 'shortcut icon', type: 'image/png', href: icon},
  ].map(toTag('link'))
  const metatags = [
    {
      name: `description`,
      content: description || site.siteMetadata.description,
    },
    {
      property: `og:title`,
      content: title || site.siteMetadata.title,
    },
    {
      property: `og:description`,
      content: description || site.siteMetadata.description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description || site.siteMetadata.description,
    },
  ].concat(meta).map(toTag('meta'))
  return <>
    <div className={`layout ${className}`}>
      <header>
        <Link className="App__banner" to="/" title="Almost-Dead.net home page">
          <img src="https://i.imgur.com/q5cBEHG.png" alt="Almost-Dead.net banner" />
        </Link>
      </header>
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
        <a href="https://lot.almost-dead.net" className="footer__forum" title="JRAD Forum — The Lot">
          Forum
        </a>
      </footer>
    </div>
    <Helmet
      htmlAttributes={{lang}}
      title={title}
    >
      {metatags}
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      {linktags}
    </Helmet>

    {}
  </>
}

export default Layout
