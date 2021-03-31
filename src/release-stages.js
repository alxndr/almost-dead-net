export const STAGES = {
  CANARY: 'canary',
  DEV: 'dev',
  PROD: 'prod',
  UNKNOWN: 'unknown',
}

export function releaseStage() {
  switch (global.document && global.document.location.hostname) {
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
