function defineSuit(card) {
  let suit = card.slice(-1)
  return suit == '♣' ? 'clubs' : 
  suit == '♠' ? 'spades' :
  suit == '♦' ? 'diamonds' :
  suit == '♥' ? 'hearts' : false
}