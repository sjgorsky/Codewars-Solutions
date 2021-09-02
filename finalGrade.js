//this one sucked


function finalGrade (e, p) {
  return (e > 90 || p > 10 )? 100 : 
    (e > 75 && p > 4) ? 90 :
    (e > 50 && p > 1) ? 75 : 0
}