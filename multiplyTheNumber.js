// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15
// multiply(10)==250
// multiply(200)==25000
// multiply(0)==0
// multiply(-3)==-15


function multiply(number){
  let numToStr = number.toString()
  if (number > 0) {
  return number * (5 ** numToStr.length)
} else {
  return number * (5 ** (numToStr.length -1))
}
  }