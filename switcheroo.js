// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
  let switcher = x.split('')
  for (let i = 0; i < switcher.length; i++){
    if (switcher[i] === 'a'){
      switcher[i] = 'b'
    } else if (switcher[i] === 'b'){
      switcher[i] = 'a'
    }
  }
  return switcher.join('')
}