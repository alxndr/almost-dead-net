export const anyPath = `/:path`
export const home = `/`
export const show = `/show/:id`
export const song = `/song/:id`

export function url(route, params) {
  // TODO support more than just {id: #}
  return route.replace(':id', params.id)
}

export default {
  anyPath,
  home,
  show,
  song,
}
