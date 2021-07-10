//find the difference in cuboid volumes


function findDifference(a, b) {
  let volA = a.reduce((acc, c) => acc * c,  1)
  let volB = b.reduce((x, y) => x * y,  1)
  if (volA > volB) {
    return volA - volB
      } else {
    return volB - volA
      }
}