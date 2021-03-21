export const STAGES = {
  CANARY: 'canary',
  DEV: 'dev',
  PROD: 'prod',
  UNKNOWN: 'unknown',
}

export function releaseStage() {
  if (!document || !document.location || !document.location.hostname)
    return STAGES.UNKNOWN
  switch (document.location.hostname) {
    case 'almost-dead.net':
      return STAGES.PROD
    case 'alxndr.github.io':
      return STAGES.CANARY
    case 'localhost':
      return STAGES.DEV
    default:
      return STAGES.UNKNOWN
  }
}

export function determineRelease() {
  if (process.env.GIT_SHA && process.env.GIT_SHA.length) {
    // TODO this doesn't work when served from gh-pages...
    return process.env.GIT_SHA
  }
  if (process.env.NODE_ENV === 'development') {
    return 'develop'
  }
  return 'unknown'
}
console.log('release...', determineRelease())

