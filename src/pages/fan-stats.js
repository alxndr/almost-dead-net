import React, {useEffect, useState} from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './fan-stats.css'

const UsernameForm = () => <form action="/fan-stats">
  <input type="text" name="username" placeholder="your username on The Lot" size="30" />
  <button>generate stats</button>
</form>

const LinkedUser = ({username}) => <a href={`https://lot.almost-dead.net/u/${username}/summary`}>@{username}</a>

const Title = ({username}) => {
  if (username) {
    return <>Fan Stats for <LinkedUser username={username} /></>
  }
  return 'Fan Stats'
}

export default function FanStatsPage({location}) {
  const params = new URLSearchParams(location.search)
  const username = params.get('username')

  const [data, setData] = useState({})
  useEffect(() => {
    if (username) {
      fetch(`https://lot.almost-dead.net/u/${username}.json`)
        .then((response) => response.json())
        .then((data) => {
          if (data.user && data.user.user_fields && data.user.user_fields[1].length)
            setData({shows: JSON.parse(data.user.user_fields[1])})
          else
            setData({error: true})
        })
    }
  }, [username])

  return <Layout className="fanstatspage">
    <SEO title="JRAD Fan Stats" />
    <h1><Title username={username} /></h1>
    {data.error
      ? <><p>Uh oh, error fetching data.</p><UsernameForm/></>
      : data.shows
        ? data.shows.length
          ? <p><LinkedUser username={username} /> has seen {data.shows.length} shows.</p>
          : <><p>No shows found!</p><UsernameForm/></>
        : username
          ? <p>Loading...</p>
          : <UsernameForm/>
    }
  </Layout>
}
