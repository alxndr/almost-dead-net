/* Factory to create an array sorting function (to be used by e.g.
 * `Array.prototype.sort`), which will sort an array of objects by a property
 * (named in the `objPropertyName` param) common to each of the objects, into
 * the order specified in the `orderArray` param. Objects which do not have the
 * named property, or which have a value for the property which is not
 * specified in the `orderArray`, will end up at the end of the sorted array in
 * an undefined order (i.e. the sorting function may not be stable).
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
