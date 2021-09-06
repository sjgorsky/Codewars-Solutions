//return sum of two smallest positive numbers


function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1]
}