//Competitve Gaming Hackerrank Challenge

function levelUp(arr, k){
  let counter = new Array(101).fill(0)
  // count players at each index
  for(let num of arr){
     counter[num]++
  }
  let final = 0;
  let rank = 0;
  // counter players which satisfy cutoff criteria
  for(let i=100; i>=0; i--){
    // player with zero score cannot be leveled up so do not add that count in final
    if(i === 0){
      rank += counter[i]
    }
    else if(counter[i] > 0){
      final+= counter[i]
      rank += counter[i]
    }
    // break when rank exceeds k
    if(rank >= k ){
      return final
    }
  }
  return final
}