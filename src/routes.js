const anyPath = `/:path`
const home = `/`
const show = `/show/:id`
const song = `/song/:id`
const songWithName = `/song/:id/:name`

export function url(route, params) {
  // TODO support more than just {id: #}
  return route.replace(':id', params.id)
}

export default {
  anyPath,
  home,
  show,
  song,
  songWithName,
}
