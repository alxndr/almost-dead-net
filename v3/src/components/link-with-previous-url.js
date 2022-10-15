import React from 'react'
import {Location} from '@reach/router'
import {Link} from 'gatsby'

const LinkWithPrevUrl = ({children, state, ...rest}) => (
  <Location>
    {({location}) =>
      <Link {...rest} state={{previousUrl: location.href, ...state}}>
        {children}
      </Link>
    }
  </Location>
)

export default LinkWithPrevUrl
