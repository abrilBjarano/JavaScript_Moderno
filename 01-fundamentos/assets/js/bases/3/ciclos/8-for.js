const discos = ['pies', 'ladrones', 'laundry', 'fijacion',];


console.warn('For tradicional');

for( let i=0; i < discos.length; i++){
    console.log(discos[i]);
}


console.warn('For in');

for( let i in discos ){
    console.log(discos[i]);
}


console.warn('For of');

for( let disco of discos){
    console.log(disco);
}






