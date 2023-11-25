//!objetos literales
// son objetos que tienen pares de valores (?


const personaje = {
    nombre: "tony stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: { //objeto dentro de un objeto
        lat: 34.034,
        long: -118.70
    },
    trajes: ["mark1", "markV", "hulkbuster" ],
    direccion: {
        zip: '10880, 906265',
        ubicacion: "malibu, california"
    },
    'ultima pelicula': "infinity war" //se pone con comillas para aceptar el espacio y se lee como un string
};




console.log(personaje)
console.log("nombre", personaje.nombre);
console.log(personaje['nombre']);
console.log("coors", personaje.coords.lat);
console.log("numero de trajes", personaje.trajes.length);
console.log("ultimo traje", personaje.trajes.length - 1 );

const x = "vivo";
console.log("vivo", personaje[x]);

console.log('ultima pelicula', personaje['ultima pelicula']);

//!mas detalles

delete personaje.edad; //palabra reservada para borrar propiedad


personaje.casado = true; //crear una nueva propiedad


const entriesPares = Object.entries(personaje); //trata a las propiedades como arreglos
console.log(entriesPares) //cada arreglo tiene dos valores

//que el objeto sea constante me permite cambiar las propiedades
//lo que no se puede hacer es cambiar la asignacion del objeto

//para hacer un bloqueo del cambio de las propiedades:

Object.freeze(personaje); //lo conjela en el momento en el que yo lo puse, las propiedades extra que ya cree se quedan

//no congela a objetos dentro de objetos

personaje.direccion.ubicacion = 'costa rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje); //ahora es un arreglo
const valores = Object.values(personaje);
console.log(propiedades, valores);
