//square all the digits in a number

function squareDigits(num){
  let digits = Array.from(String(num), Number)
  let squares = digits.map(digit => digit ** 2)
  return Number(squares.join(''))
  
}