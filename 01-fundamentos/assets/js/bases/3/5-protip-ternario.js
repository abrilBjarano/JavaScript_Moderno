const elMayor = (a, b) => (a > b) ? a : b ;
const tieneMembresia = (miembro) => (miembro) ? `2 Dolar` : `10 Dolar`;

console.log( elMayor(231, 5) );
console.log( tieneMembresia(false) );

const amigo = true;

let amigos = [
    'eduardo',
    'pau',
    'juan',
    'natalia',
    amigo ? 'kari' : 'omar',
]

console.log({ amigos });


const nota = 100;

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' : 'F'


console.log({ nota, grado });









