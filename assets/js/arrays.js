
let juegos = ['zelda', 'mario', 'metroid', 'chrono'];

let primero = juegos[2-2]; //para encontrar posicion
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

juegos.forEach ((element, indice, arr) => { //para barrer elementos
    console.log(element, indice, arr )
})

let newArray = juegos.push('f-zero'); //para agregar al final

console.log(newArray, juegos);

newArray = juegos.unshift("fire emblem"); //para agregar al inicio
console.log(newArray, juegos);

let juegoborrado = juegos.pop(); //para borrar el ultimo elemento
console.log(juegoborrado, juegos);

let posicion = 1;

let borrados = juegos.splice(posicion, 2); //para borrar 1 o + elementos en una posicion
console.log(borrados, juegos);

let metroidIndex = juegos.indexOf('metroid'); //para encontrar la posicion de un elemento
console.log(metroidIndex)


