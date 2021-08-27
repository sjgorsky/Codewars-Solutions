//rock paper scissors...go!


const rps = (p1, p2) => {
  let m1 = 'Player 1 won!'
  let m2 = 'Player 2 won!'
  let m3 = 'Draw!'
  return p1 === 'rock' && p2 === 'scissors' ? m1 : 
  p1 === p2 ? m3 :
  p1 === 'rock' && p2 === 'paper' ? m2 :
  p1 === 'paper' && p2 === 'scissors' ? m2 : 
  p1 === 'paper' && p2 === 'rock' ? m1 :
  p1 === 'scissors' && p2 === 'paper' ? m1 :
  p1 === 'scissors' && p2 === 'rock' ? m2 : m3
};