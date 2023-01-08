/* Los valores primitivos se pasan por valor */

a = 10;
b = a;
a = 20;

console.log({ a, b });


/* Y los objetos por referencia */

let juan = { 
    nombre: 'Juan'
};
let ana  = juan;
ana.nombre = 'Ana';

console.log({ juan, ana } ); /* Ana, Ana */


const cambiarNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { 
    nombre: 'Peter'
};
let tony = cambiarNombre( peter );

console.log({ peter, tony }); /* Tony, Tony */


let eduardo = { 
    nombre: 'Eduardo'
};
let paulina = { ...eduardo }; /* Los tres puntos aquí, se conocen como operador spread */
paulina.nombre = 'Paulina';

console.log({ eduardo, paulina }); /* El resultado que se espera */


const cambiarNombre2 = ({ ...persona }) => {
    persona.nombre = 'Ruperto';
    return persona;
}

let abril = { 
    nombre: 'Abril'
};
let ruperto = cambiarNombre2( abril );

console.log({ abril, ruperto }); /* El resultado que se espera */


const frutas = ['Mango', 'Uva', 'Sandía'];
const otrasFrutas = [...frutas]; /*  o frutas.slice() */

otrasFrutas.push('Kiwi');

console.table({ frutas, otrasFrutas });














