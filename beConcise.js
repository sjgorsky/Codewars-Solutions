//create shortest possible function

const describeAge = (age) => {
  let p = "You're a(n) "
  return age<=12?`${p}kid`:age<=17?`${p}teenager`:age<=64?`${p}adult`:`${p}elderly`
}