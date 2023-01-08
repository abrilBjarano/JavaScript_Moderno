function saludar( nombre ) {
    console.log( arguments ); /* all the traditional functions that has a "function" have this object */
    console.log('Hola ' + nombre);
}


const saludar2 = function( nombre ) { /* anonymous function */
    console.log('Hola ' + nombre);
}


const saludarFlecha = () => { /* lambda function */
    console.log('Hola flecha');
}


const saludarFlecha2 =  nombre  => { /* lambda function */
    console.log('Hola ' + nombre);
}


let nombre = prompt('Ingresa tu nombre', 'Sin nombre');
saludar( nombre, 21, true, 'mexico' );
saludar2( nombre );

saludarFlecha2( nombre );


function miata( respuesta ) {
    console.log('Soy un miata: ' + respuesta);
    console.log('pero esto sí');
    
    return [1, 2, 3];

    console.log('this will never be executed. after the return');
}

miata('si');
const miara = miata('si'); /* = [1, 2, 3] */
console.log({ miara });
console.log( miara[0], miara[1]); /* 1, 2 */


function sumar( a, b ) {
    return a + b;
}

// const sumar2 = ( a, b ) => {
//     return a + b;
// }

const sumar2 = ( a, b ) =>  a + b;

console.log( sumar( 3,3 ) );
console.log( sumar2( 5,5 ) );


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio() );
console.log( getAleatorio2() );













