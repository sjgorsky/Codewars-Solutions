//return sequential array of length n


function monkeyCount(n) {
let newArr = [...Array(n + 1).keys()]
  return newArr.slice(1)
  }