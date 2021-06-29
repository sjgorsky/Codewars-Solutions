//refactor to sum the numbers of an array 1..n

var summation = function (num) {
  const arr = Array.from({length: num}, (_, index) => index + 1)
  return arr.reduce((a, c) => a + c, 0)
}