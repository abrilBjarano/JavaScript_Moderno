/* 
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
*/

let deck         = [];
const tipos      = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const puntos = document.querySelectorAll('small');

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

// Eventos 

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntos[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Game over');
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ) {
        console.warn('21. Muy bien');
        btnPedir.disabled = true;
    }

});

