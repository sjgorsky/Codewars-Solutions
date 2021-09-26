//return two highest UNIQUE values in array

function twoHighest(arr) {
  let unique = [...new Set(arr)]
  unique.sort((a, b) => b - a)
  return unique.slice(0, 2)
}