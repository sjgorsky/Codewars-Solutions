//check if your score is better than the class average


function betterThanAverage(classPoints, yourPoints) {
  const classSum = classPoints.reduce((a, c) => a + c, 0)
  const classAvg = classSum / classPoints.length
  return yourPoints > classAvg ? true : false
}