//test if sum of squares of first array is greater than cubes of second array


function arrayMadness(a, b) {
 let arr1 = a.map(num => num ** 2)
 let arr2 = b.map(num => num ** 3)
 let sum1 = arr1.reduce((acc, c) => acc + c, 0)
 let sum2 = arr2.reduce((acc, c) => acc + c, 0)
 return sum1 > sum2 ? true : false
}