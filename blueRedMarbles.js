//likelihood of pulling a red marble from bag


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let totalRemain = (blueStart - bluePulled) + (redStart - redPulled)
  return (blueStart - bluePulled) / totalRemain
  
}