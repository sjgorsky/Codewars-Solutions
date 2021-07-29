//combine strings, sort, and remove duplicates


function longest(s1, s2) {
  let newStr = s1.concat(s2)
  return [...new Set(newStr)].sort().join('')
}