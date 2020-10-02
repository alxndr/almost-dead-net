import urlcat from 'urlcat'

const anyPath = `/:path`
const home = `/`
const show = `/show/:id`
const song = `/song/:id`
const songWithName = `/song/:id/:name`

export function url(route, params) {
  return urlcat('', route, params)
}

export default {
  anyPath,
  home,
  show,
  song,
  songWithName,
}
