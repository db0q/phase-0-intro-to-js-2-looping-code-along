// Code your solutions in this file
function writeCards( names, surprise ) {
    let thankYouCards = []
    for ( let i = 0; i < names.length; i++ ) {
      thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${surprise} gift!` )
    }
    return thankYouCards
  }

function   countDown(number){
   while(number>0){
    console.log(number);
    number -= 1
   
   }
   console.log(number)
}
