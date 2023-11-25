
//!funcion tradicional

function saludar (nombre) {
//     console.log('hola ' + nombre);
//     console.log(arguments); //solo para funciones tradicionales (no =>)
 }

saludar('camila'); //llamar la funcion para que se ejecute el codigo
saludar('camila', 20, true)


//!funcion anonima

const saludar2 = function(nombre) { //al tener constante no se puede reutilizar el nombre de la variable
    // console.log('hola ' + nombre)
}

saludar2('fernando');

//!funcion flecha

const saludarFlecha = () => {
    // console.log('hola flecha');
}
saludarFlecha();

//!con argumentos (los parentesis para el argumento no son necesario)
const saludarFlecha2 = nombre => {
    // console.log('hola ' + nombre);
}
saludarFlecha2('belen');

//!return

//si la funcion no tiene la palabra reservada return entonces devuelve undefined;

function saludar3 (nombre){
    // console.log("hola " + nombre);
    return [1,2,3];
}

const retorno = saludar3('navarret');
console.log(retorno [0]);

function sumar (a,b) {
    return a +b;
}

console.log(sumar (1,2));

// const sumar2 =(a,b) => {   
//     return a +b;
// }

const sumar2 = (a,b) => a + b; //cuando hay una sola linea de codigo para ejecutar (un solo return) se puede reducir todo a una sola linea.

console.log(sumar2 (2,6))

// function getAleatorio () {
//     return Math.random();
// }

const getAleatorio = () => Math.random(); 

console.log (getAleatorio())

