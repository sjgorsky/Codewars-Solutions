//merge, sort, and remove duplicates from array


function mergeArrays(arr1, arr2) {
  let newArr = arr1.concat(arr2)
  let sorted = newArr.sort((a, b) => a-b)
  return [...new Set(sorted)]
}