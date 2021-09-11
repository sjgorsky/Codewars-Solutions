//return shortest word in a string


function findShort(s){
  const arr = s.split(' ')
  const ordered = arr.sort((a, b) => a.length - b.length)
  return ordered[0].length
}