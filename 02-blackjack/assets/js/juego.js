/* 
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
*/

let deck       = [];
const numeros  = [2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let tipos      = ['C','D','H','S'];
let especiales = ['A','J','Q','K'];


/* This function create a new deck */

const crearDeck = ( ) => {

    for( let num in numeros){
        for(let tipo of tipos){

            deck.push( num + tipo);
        }
    }

    for( let esp of especiales){
        for(let tipo of tipos){

            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
} 

crearDeck();


/* This function let pick a cart */

const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay más cartas en el deck';
    }

    let carta = deck.shift();
    console.log( deck );
    console.log( carta );
}

pedirCarta();
























