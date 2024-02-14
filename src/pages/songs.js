import * as React from 'react'
import { graphql } from 'gatsby';

export default function SongsPage({data}) {
  const {allSqliteSongs: {nodes: allSongs}} = data;
  return (
    <main>
      <p>Songs go here!</p>
      <ul>
        {allSongs.map(songData =>
          <li><a href={`/song/${songData.id.replace(/\D/g, '')}`}>{songData.title}</a></li>
        )}
      </ul>
    </main>
  )
}

export const query = graphql`{
  allSqliteSongs {
    nodes {
      id
      title
      author
      aka
      notes
      debut_gd
    }
  }
}`

export const Head = () => <title>All Songs teased or played — Joe Russo's Almost Dead</title>
