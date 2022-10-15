/* Appends an "s" to the end of `word` if warranted by the value of `number` */
export function pluralize(number, word) {
  return `${number} ${word}${number !== 1 ? 's' : ''}`
}
