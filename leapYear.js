//check if year is a leap year


function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false
}