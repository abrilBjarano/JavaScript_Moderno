// a = 11;

// if ( a >= 10 ) {
//     console.log('A es mayor o igual a 10');
// } else {
//     console.log('A es menor');
// }

// console.log('Fin del programa');


// const hoy = new Date();
// let dia = hoy.getDay();

// console.log({ dia });           /* dia es un primitivo numero */

// if ( dia === 4 ) {            /* = asignación, == comparación sin importar el tipo, === comparación contemplando también el tipo */
//     console.log('Es jueves');   /* dia es igual a 4,   dia es igual a 4 o '4'?                  dia es IGUAL a solamente 4? */
// } else {
//     console.log('No es jueves');
// }


const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',];
let dia = 8;

console.log('El día es:', dias[dia] || 'Día no definido');
