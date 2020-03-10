// Code your solutions in this file
const cards = (["Lisa", "Kaitlin", "Jan"], "birthday");

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}

writeCards(cards);