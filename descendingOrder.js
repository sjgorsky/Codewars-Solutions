//sort numbers in descending order


function descendingOrder(n){
  let sorted = n.toString().split('').sort((a, b) => b - a).join('')
  return Number(sorted)
}