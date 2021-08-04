//return an array of consecutive numbers of N length 


function arr(N){
  if (N === undefined) {
    return []
  } else {
  return Array.from(Array(N).keys())
    }
}