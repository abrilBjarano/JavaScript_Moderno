let personaje = {
    nombre: 'Lain',
    codeName: 'God',
    vivo: true,
    edad: 12,
    coords: {
        lat: 34.23,
        lng: -123
    },
    trajes: ['normal', 'wired'],
    direccion: {
        zip: '23123, 1231',
        ubicacion: 'Japon'
    },
    'poner_comillas_para_usar_guion_bajo_en_nombres_variable': true

};
console.log(personaje); /* it prints alphabetical way */
console.log('Nombre:', personaje.nombre);
// console.log('Nombre:', personaje['nombre']);

console.log('Edad:', personaje.edad);
// console.log('Edad:', personaje['edad']);

console.log('Coors:', personaje.coords);
// console.log('Coors:', personaje['coords']);

console.log('Coors. Lat:', personaje.coords.lat);
console.log('No. trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log(personaje['poner_comillas_para_usar_guion_bajo_en_nombres_variable']);


// más detalles

personaje.edad = null;      /* attempt to delete a property */
console.log( personaje );

delete personaje.edad;      /* actual way to delete a property */
console.log( personaje );


personaje.casado = false; /* to add a property. casado wasn't previously on the object */


const entriesPares = Object.entries( personaje ); /* to crate an array from a literal object */
console.log( entriesPares );


const anaBarbara = {
    loca: true
}
anaBarbara.enamorada = true;
// anaBarbara = 'bandida'; /* if the literal object is a "const", it can't be modified this way */
console.log( anaBarbara ); /* but this */

// personaje = 'if the literal object is a "let" type variable, it can be modified this way';
// console.log( personaje );

Object.freeze( personaje ); /* to avoid add more properties (and change them) to the literal object */
personaje.dinero = 100;
console.log( personaje );

personaje.coords.lat = 33; /* but it can't freeze this, a propertys property */
personaje.direccion.ubicacion = 'Mexico';
console.log( personaje.coords );
console.log( personaje.direccion.ubicacion );


const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades );
console.log( valores );

















