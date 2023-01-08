let discos = ['pies', 'lagrones', 'fijacion'];
console.log('Largo:', discos.length); 


let primero = discos[0];
let ultimo = discos[discos.length - 1];
console.log(primero + ", " + ultimo);


discos.forEach(( elemento, indice, arr) => { /* to print each index */
    console.log({ elemento, indice, arr });
});


let nuevaLongitud = discos.push( 'laundry' ); /* to append a new element to the end of an array and returns the new array length */
console.log({ nuevaLongitud, discos });


nuevaLongitud = discos.unshift( 'magia' ); /* to append a new element at the start of an array and returns the new array length */
console.log({ nuevaLongitud, discos });

let discoBorrado = discos.pop(); /* to remove the last array element */
console.log({ discoBorrado, discos });


console.log( discos );
let pos = 0;
let discosBorrados = discos.splice( pos, 1); /* to remove some array element. position, number of index we want to remove */
console.log({ discosBorrados, discos });


let fijacionIndex = discos.indexOf('fijacion') /* returns de index of the first occurrence */
console.log({ fijacionIndex }); /* cAsEsEnSitIve */


// TODO: Referencia











