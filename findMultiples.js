//return values int through limit that are multiples of int


function findMultiples(int, limit) {
  const multiples = []
  for (let i = int; i <= limit; i++){
    multiples.push(i)
    }
    return multiples.filter(x => x % int == 0)
}