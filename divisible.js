//check  if n is divisible by x AND y

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0){
    return true
  } else {
    return false
  }
}