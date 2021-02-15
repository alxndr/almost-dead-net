const [, ...showIds] = Array(100).keys()

export default {
  getRoutes: async () => {
    return [
      {
        children: showIds.map((showId) => {
          return {
            path: `/show/${showId}`
          }
        })
      }
    ]
  }
}
