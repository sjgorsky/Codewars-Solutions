//return highest and lowest values of array


function highAndLow(numbers){
  let newArr = numbers.split(' ')
  let sorted = newArr.sort((a, b) => a - b)
  return sorted[sorted.length - 1] + ' ' + sorted[0]
}