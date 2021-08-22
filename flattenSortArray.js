//flatten and sort array


function flattenAndSort(array) {
 let newArr = [].concat(...array).sort((a, b) => a - b)
 return newArr
}