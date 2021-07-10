//write function that returns surface are and volume of a box in an array


function getSize(width, height, depth) {
  let arr = []
  let area = (2*width*height)+(2*width*depth)+(2*height*depth)
  let volume = width * height * depth
  arr.push(area, volume)
  return arr
}