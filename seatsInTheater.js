//calculate remaining theatre seats


function seatsInTheater(nCols, nRows, col, row) {
  let remCol = nCols - col + 1
  let remRow = nRows - row
  return remCol * remRow
  
}