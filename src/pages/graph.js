import pp from 'pretty-js'
import React, {useEffect, useState} from 'react'
import {graphql} from 'gatsby'
import 'gun'
import G from 'gun/gun'
import 'gun/lib/then' // magically adds a `.then()` to GunDB chains
import slug from 'slug'

import Layout from '../components/layout'

const Graphs = ({perfs}) => <>
  <p>Graphs!</p>
  <pre>{pp(perfs)}</pre>
</>

export default function GraphPage({data}) {
  const {
    allSetsCsv: {nodes: allSets},
    allSongperformancesCsv: {nodes: allSongPerfs},
    allShowsCsv: {nodes: allShows},
  } = data

  const [db, setDb] = useState()
  const [perfs, setPerfs] = useState()

  global.console.log({db, perfs})

  useEffect(async () => {
    if (!db)
      return
    // db.get(`show-38`).get('sets').map().get('performances').map().once((sets) => console.log('perfs in show 38', sets))
    // global.console.log('bertha performances', await db.get(`song-bertha`).map().get('performances').map().then())
    const perfs = await db.get(`set-100`).get('performances').then()
    console.log('performances in set 100', perfs)
    setPerfs(perfs)
  }, [db])

  useEffect(async () => {
    const g = G()
    allSongPerfs.forEach(({id, song_name}) => {
      const songSlug = slug(song_name)
      const songNode = g.get(`song-${songSlug}`)
      const songPerfNode = g.get(`songperf-${id}`).put({
        id,
        song_name,
        song: songNode
      })
      // songPerfNode.get('song').put(songNode)
      songNode.get('performances').set(songPerfNode)
    })
    global.console.log('songs added...')
    allSets.forEach(({id, setlist}) => {
      const setNode = g.get(`set-${id}`).put({
        id,
      })
      String(setlist).split(':').forEach((songPerfId, index, setlistArr) => {
        const songPerfNode = g.get(`songperf-${songPerfId}`)
        if (index > 0) {
          const prevSongPerfId = setlistArr[index-1]
          const prevSongPerfNode = g.get(`songperf-${prevSongPerfId}`)
          prevSongPerfNode.get('precedes').set(songPerfNode)
          songPerfNode.get('follows').set(prevSongPerfNode)
        }
        setNode.get('performances').set(songPerfNode)
      })
    })
    global.console.log('sets added...')
    allShows.forEach(({id, date, encore1, encore2, set1, set2, set3, soundcheck}) => {
      const showNode = g.get(`show-${id}`).put({
        id,
        date,
      }); // semicolon needed when next line starts with an array literal...
      [set1, set2, set3, encore1, encore2].forEach((which) => {
        if (which) {
          const setNode = g.get(`set-${id}`).put({which})
          showNode.get('sets').set(setNode)
        }
      })
    })
    global.console.log('done building database')
    setDb(g)
  }, [])

  return <Layout className="graphPage">
    <h1>setlist graphs...</h1>
    {perfs
    ? <Graphs perfs={perfs} />
    : <p>Building database...</p>
    }
  </Layout>
}

export const query = graphql`
  query GraphData {
    allShowsCsv {
      nodes {
        id
        date
        encore1
        encore2
        set1
        set2
        set3
        soundcheck
      }
    }
    allSetsCsv {
      nodes {
        id
        setlist
      }
    }
    allSongperformancesCsv {
      nodes {
        id
        song_name
      }
    }
  }
`
