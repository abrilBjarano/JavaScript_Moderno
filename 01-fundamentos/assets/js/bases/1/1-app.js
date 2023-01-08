// JavaScript reads the whole file before executing


alert('Hi from app.js');


console.log(myName +  ' Bejarano');


console.log('Hola mundo');


let jeje = 10;
var jiji = 10;  /* old way of creating variables, but it's still valid  */ 
const jojo = 10; /*  */

// jojo = 20; /* <- can't be made due to the already existing value */

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'spiderMan',
    x = a + b;

const greeting = c + d; /* const names must be capitalized */

console.log(x); 
console.warn(x);    /* <-- the name */
console.error(x);   /* <-- says so */


// ways to display the value variable v

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

console.log('%c My variables', 'color:red; font-family: JetBrains Mono'); /* way to create a clg w/style */

console.log({a});
console.log({b}); /* best way */
console.log({c});


console.table({ a, b, c, d, x}); /* to create a table with the index (variable name) and the value */
 

// Breakpoints and debugging

var outerHeight = 1000000;  /* don't rewrite the original */
const outerWidth = 5000;    /* values of "window" object */

let myName = 'Abril';





















