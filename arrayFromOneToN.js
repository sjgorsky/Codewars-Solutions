//return array from 1 to n


// function preFizz(n) {
//   return Array.from({length: n}, (_, i) => i + 1)
// }

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}