export const STAGES = {
  CANARY: 'canary',
  DEV: 'dev',
  PROD: 'prod',
  UNKNOWN: 'unknown',
}

export function releaseStage() {
  if (!window || !window.document || !document.location || !document.location.hostname)
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
