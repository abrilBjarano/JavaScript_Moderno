let nombre = 'Abril'; /* <-- string */ /* inicializing the 'nombre' variable */
console.log(nombre);

nombre = 'Griselda'; /* rewriting the 'nombre' variable */
console.log(nombre);

// let nombre = 'Griselda'; /* re-inicializating the 'nombre' variable = WRONG */

nombre = 'Ruperto mi gato';
console.log(nombre);
console.log(typeof nombre); /* to know the variable type */

nombre = 123; /* mutated */
console.log(typeof nombre); 

let esGato = true;
console.log(typeof esGato);

let age = 21.9;
console.log(typeof age); /* is still Number, not Float */

let superPower; 
console.log(typeof superPower); /* undefined variable, cuz it's defined but uninicialized */

let soyNull = null;
console.log(typeof soyNull); /* object */

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1); /* symbol type */

console.log(symbol1 == symbol2);












