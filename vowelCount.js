//creeate a function that counts instances of vowels and returns 0 when there are none

function getCount(str) {
  let vowels = /[aeiou]/gi
  let result = str.match(vowels)
  if (result == null){
   return 0
    } else {
      return result.length
    }
}