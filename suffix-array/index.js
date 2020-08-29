const searchPattern = (str) => {
  let strLen = str.length
  let suffixArray = new Array(strLen)
  let suffixes = new Array(strLen)

  for (let i = strLen-1; i >= 0; i--) suffixes[i] = [i, str.substr(i)]
  suffixes.sort((a, b) => (a[1] < b[1] ? -1 : 1))
  for (let i = 0; i < strLen; i++) suffixArray[i] = suffixes[i][0]

  return (pattern) => {
    let l = 0
    let r = strLen - 1
    while (l <= r) {
      let mid = (l + r) >> 1
      /**
       * The localeCompare() method compares two strings in the current locale.
       * The locale is based on the language settings of the browser.
       * console.log(pattern.localeCompare(suffixes[suffixArray[mid]][1], 'en', 
       * { sensitivity: 'base' }));
       */
      let cmp = pattern.localeCompare( suffixes[suffixArray[mid]][1] )
      if (cmp === 0) {
        return mid
      } else if (cmp > 0) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return -1
  }
}