/* eslint-disable semi */

/**
 * Determine whether localStorage is available and behaves to spec.
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 *
 * @returns {boolean} whether or not the current environment correctly implements localStorage
 */
export function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}

export function urlToKeyCSV(url) {
  // assumes the URL is a raw Gist URL
  return url.split('/').slice(-2).join('/')
}

export function urlToKey(url) {
  // assumes the URL is a raw Gist URL
  return url.split('/').slice(-2).join('/').split('.')[0]
}
