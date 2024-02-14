const path = require('path')

export.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  const songTemplate = path.resolve('src/template/song.js')
  return graphql(`query allSqliteSongsQuery {
    allSqliteSongs {
      nodes {
        id
        title
        author
        aka
      }
    }
  }`).then(result => {
    if (result.errors) throw errors
    result.data.allSqliteSongs.edges.forEach(edge => {
      createPage({
        path: edge.node.title.toLowerCase(),
        component: songTemplate,
        context: {
          foo: 'barrrrrr',
        }
      })
    })
  })
}
