export function normalizeSetlist(rawSetlistValue) {
  return typeof rawSetlistValue === "number"
    ? [rawSetlistValue]
    : typeof rawSetlistValue === "string"
      ? rawSetlistValue.split(':')
      : []
}
