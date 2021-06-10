/* Factory to create an array sorting function, which will sort an array of
 * objects by a property common to each of the objects (named in the first
 * param) in the order specified (in the second param).
 */
export function objectSorterFactory(objPropertyName, orderArray) {
  const INDEX_OFFSET = 1
  return (objA, objB) => {
    const propA = objA[objPropertyName]
    const propB = objB[objPropertyName]
    if (propA === propB) // short-circuit: no need for further inspection if values are the same
      return 0;
    const valuesArray = [propA, null, propB] // this array will be used with indexOf to determine which input object comes "first"
    const firstValue = orderArray.find((sortedProp) => valuesArray.includes(sortedProp))
    if (firstValue)
      return valuesArray.indexOf(firstValue) - INDEX_OFFSET // subtract offset so that the returned value is either -1 or 1
    return 0
  }
}
