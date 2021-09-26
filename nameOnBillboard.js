//bascially multiply a string length without using *


function billboard(name, price = 30){
  let newStr = name.repeat(price)
  return newStr.length
} 