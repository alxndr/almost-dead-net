const [, ...showIds] = Array(100).keys()

export default {
  getRoutes: () => {
    return [
      {
        path: '/',
      },
      {
        path: '/show',
        children: showIds.map((showId) => {
          return {
            path: showId.toString(), // relative to parent path
          }
        }),
      },
    ]
  },
  // getSiteData may be necessary?? https://github.com/react-static/react-static/blob/master/docs/config.md#getsitedata
  maxThreads: 4, // be polite on this old Mac
  productionSourceMaps: true,
  siteRoot: 'https://almost-dead.net',
}
