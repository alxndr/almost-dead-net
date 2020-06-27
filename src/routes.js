import {STAGES, releaseStage} from './release-stages'

const URL_ROUTING_BASE_WITH_SLASH = releaseStage() === STAGES.CANARY
  ? '/almost-dead-net/' // https://alxndr.github.io/almost-dead-net
  : '/'

export const anyPath = `${URL_ROUTING_BASE_WITH_SLASH}:path`
export const home = `${URL_ROUTING_BASE_WITH_SLASH}`
export const show = `${URL_ROUTING_BASE_WITH_SLASH}show/:id`

export default {
  anyPath,
  home,
  show,
}
