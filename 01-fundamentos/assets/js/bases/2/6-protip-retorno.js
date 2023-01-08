// function crearPersona( nombre, apellido ) {
// //     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// const persona = crearPersona( 'Abril', 'Bejarano' );
// console.log( persona );


// function crearPersona( nombre, apellido ) {
// //     return {
//         nombre, /* in case the names of the property and the parameter are the same */
// //         apellido
// //     }
// // }

// const persona = crearPersona( 'Abril', 'Bejarano' );
// console.log( persona );


// const crearPersona = ( nombre, apellido ) => {
// //     return { 
//         nombre, apellido 
// //     }
// // }

// const persona = crearPersona( 'Abril', 'Bejarano' );
// console.log( persona );


const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

// const persona = crearPersona( 'Abril', 'Bejarano' );
// console.log( persona );


// function imprimeArgumentos() {
//     console.log( arguments );
// }

// const imprimeArgumentos2 = ( estado, ...args ) => { /* como parametro, no puede haber otra cosa después */
//     console.log({ estado, args }); /* to extract a parameter  */
//     return args;
// }

// imprimeArgumentos('Loca','enamorada', 'y loca', 'capaz de', 'cualquier cosa');
// const argumentos = imprimeArgumentos2('Loca','enamorada', 'y loca', 'capaz de', 'cualquier cosa');
// console.log({ argumentos });


// const jenniRivera = ( chacalosa, ...args ) => { /* 3 puntos significan el operador rest aquí */
//     return args;
// }

// const [ casada, viva, edad, nombre ] = jenniRivera( true, true, false, 43, 'Jenni');
// console.log({ casada, viva, edad, nombre }) ;


// const { apellido: miApellido } = crearPersona('Abril', 'Bejarano');
// console.log({ miApellido }); /* Bejarano */


const lain = {
    nombre: 'Lain',
    codeName: 'God',
    vivo: true,
    // edad: 12,
    trajes: ['normal', 'wired']
};

// const imprimePropiedades = ( personaje ) => {      /* ESTE ESTA MUY DESORDENADO */
//     console.log( 'nombre: ',personaje.nombre );
//     console.log( 'codeName: ',personaje.codeName );
//     console.log( 'vivo: ',personaje.vivo );
//     console.log( 'edad: ',personaje.edad );
//     console.log( 'trajes: ',personaje.trajes );
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {      /* ESTE ESTA MAS ORDENADO */

    // edad = edad || 0; /* in case edad don't exist */

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};

imprimePropiedades( lain );