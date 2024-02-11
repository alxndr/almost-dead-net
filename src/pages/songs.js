import * as React from 'react'
import { graphql } from 'gatsby';

export default function SongsPage({}) {
  return (
    <main>
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
