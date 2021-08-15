//it's essentially FizzBuzz


const multiple = x => x % 15 == 0 ? 'BangBoom' :
  x % 3 == 0 ? 'Bang' :
  x % 5 == 0 ? 'Boom' :
  'Miss'
