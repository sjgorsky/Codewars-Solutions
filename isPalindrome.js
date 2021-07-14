//test if x is a palindrome


function isPalindrome(x) {
  let normalCase = x.toLowerCase()
  let reversed = normalCase.split('').reverse().join('')
  return normalCase == reversed ? true : false
}