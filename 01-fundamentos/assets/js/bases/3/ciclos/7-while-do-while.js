const discos = ['pies', 'ladrones','fijacion',];

let i = 0;

console.warn('While');

while( discos[i] ){ /* is going to stop when the equivalence equals to undefinied, null or false */
    console.log(discos[i]);
    i++;
}


console.warn('Do While');

let j = 0;

do {
    console.log( discos[j] );
    j++;

} while ( discos[j] );



