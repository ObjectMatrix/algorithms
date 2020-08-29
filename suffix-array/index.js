/**
 * The suffix tree is an improvement over the trie (it has suffix links which allow linear error search, the suffix tree trims unnecessary branches of the trie therefore it does not require as much space).
 * The suffix array is a stripped down data structure based on the suffix tree (no suffix links (slow error matches), yet pattern matching is very fast).
 * The trie is not for real world use because it consumes too much space.
 * The suffix tree is lighter and faster than the trie and is used to index DNA or optimize some large web search engines.
 * The suffix array is slower in some pattern searches than the suffix tree but uses less space, and is more widely used than the Suffix tree.
 * In the same family of data structures:
 * There are other implementations, the CST is an implementation of the suffix tree using a suffix array and some additional data structures to get some of the suffix tree search capabilities.
 * The FCST takes it further, it implements a sampled suffix tree with a suffix array.
 * The DFCST is a dynamic version of the FCST.
 * Expanding:
 * The two important factors are space use and operation execution time. You might think that with modern day machines this is not relevant but to index the DNA of a single human being would require 40 gigabytes of memory (using an uncompressed and unoptimized suffix tree). And to build one of this indexes over this much data can take days. Imagine Google, it has lots of searchable data, they need a large index over all web data and they do not change it every time someone builds a web page. They have some form of caching for that. However the main index is probably static. And every couple of weeks or so they gather all new web sites and data and build a new index, replacing the old when the new is finished. I do not know which algorithm they use to index, but it is probably a suffix array with suffix tree properties over a partitioned database.
 * The CST uses 8 gigabytes, however the suffix tree operations speed are heavily reduced.
 * The suffix array can do the same in some 700 megas to 2 Gigas. However you will not find genetic errors in the DNA with a suffix array (meaning: searching for a pattern with a wildcard is much much slower).
 * The FCST (fully compressed suffix tree) can create a suffix tree in 800 to 1.5 gigas. With a rather small speed deterioration towards the CST.
 * The DFCST uses 20% more space than the FCST, and loses speed to the static implementation of the FCST (however a dynamic index is very important).
 * There are not many viable (space wise) implementations of the suffix tree because it is very hard to make the operations speed boost compensate the data structures RAM space cost.
 * This said, the suffix tree has very interesting search results for pattern matching with errors. The aho corasick is not as fast (though nearly as fast for some operations, not error matching) and the boyer moore is left in the dust.
 * @param {str} str 
 */
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

