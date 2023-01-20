let deck         = [];
const tipos      = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir         = document.querySelector('#btnPedir'),
      btnDetener       = document.querySelector('#btnDetener'),
      btnNuevo         = document.querySelector('#btnNuevo'),
      divCartasJugador = document.querySelector('#jugador-cartas'),
      divCartasComp    = document.querySelector('#computadora-cartas'),
      puntos           = document.querySelectorAll('small');

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

    return deck;
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


/* Computer's turn */
const turnoCompu = ( puntosMinimos ) => {

    do {
        
        const carta         = pedirCarta();
        puntosComputadora   = puntosComputadora + valorCarta( carta );
        puntos[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
    
        divCartasComp.append( imgCarta );

        if( puntosMinimos > 21 ){
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {

        if( puntosComputadora === puntosMinimos ){
            alert('Nadie gana');
        } else if ( puntosMinimos > 21) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21){
            alert('Jugador gana');
        } else if ( (puntosComputadora > puntosMinimos) && ( puntos)){
            alert('Computadora gana');
        }

    }, 10);

}


/* This functions creates the value of each card */ 
const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

/* Events */
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
        btnPedir.disabled   = true;
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoCompu( puntosJugador );
        
    } else if ( puntosJugador === 21 ) {
        console.warn('21. Muy bien');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoCompu( puntosJugador );
    }
});

btnDetener.addEventListener('click', () => {

    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoCompu( puntosJugador );
});

btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();

    puntosJugador     = 0;
    puntosComputadora = 0;

    puntos[0].innerText = 0;
    puntos[1].innerText = 0;

    divCartasComp.innerHTML    = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});