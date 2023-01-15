/* 
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
*/

let deck       = [];
let tipos      = ['C','D','H','S'];
let especiales = ['A','J','Q','K'];


/* This function create a new deck */

const crearDeck = ( ) => {

    for( let i = 2; i <= 10; i++){
        for(let tipo of tipos){

            deck.push( i + tipo);
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

/* This function let pick a card */

const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay más cartas en el deck';
    }

    let carta = deck.shift();
    console.log( carta );
    return carta;
}

// pedirCarta();

/* This functions creates the value of each card */ 
const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

const valor = valorCarta( pedirCarta() );
console.log({ valor });


























