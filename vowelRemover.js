//remove lowercase vowels from a string

function shortcut(string){
  const vowels = /[aeiou]/g
  return string.replace(vowels, '')
}