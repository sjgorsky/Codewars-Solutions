// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"


var typeOfTriangle = function (sideA, sideB, sideC) {
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA){
    return 'Not a valid triangle'
  } else if (sideA === sideB && sideA === sideC){
    return 'Equilateral'
  } else if (sideA === sideB || sideA === sideC || sideB === sideC){
    return 'Isosceles'
  } else if (sideA !== sideB && sideA !== sideC && sideA !== sideB){
    return 'Scalene'
  } 
}