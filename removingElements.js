//remove odd indexes from array


function removeEveryOther(arr){
  const evens = []
  for (let i = 0; i < arr.length; i = i + 2){
    evens.push(arr[i])
  }
  return evens
}