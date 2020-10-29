// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     // initilization,   condition,  iteration,
//     for (let i = 0; i < gifts.length; i ++)
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // loop body
//     return gifts;
// }

// wrapGifts(gifts);

// const writeCards = (["Ada", "Brendan", "Ali"], "birthday");

// function thankYouCards(namesArray, event) {
//     let thankYouCards = []
//     // initilization, condition, iteration,
//     for (let i = 0; i < 3; i++) {
//     // loop body
//         console.log(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
//     }
//         return thankYouCards;
// }
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }