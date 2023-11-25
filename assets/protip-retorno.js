
//!para retornar  un objeto en una sola linea

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona("camila", 'navarrete');
console.log (persona);


//no se puede mostrar argumentos en una funcion flecha, pero se puede hacer de esta manera:
//se coloca como parametro (...arguments) //se usa parametro rest

const imprimeArgumentos = (edad, ...arguments/*no puede ir otro argumento despues*/) => {
    console.log({edad}, arguments);
}
imprimeArgumentos(10, true, false,"camila");

const imprimeArgumentos2 = (edad, ...arguments) => {
    return arguments;
}

const [casado, vivo,nombre, saludo] = imprimeArgumentos2 (10, true, false, "fernando", "hola");
console.log([casado, vivo,nombre, saludo]);



const {apellido: nuevoApellido} = crearPersona("fernando", "herrera");
console.log(nuevoApellido);

//!desestructuracion de argumentos

const tony = {
    nombre: "tony stark",
    codeName: "ironman",
    edad: 40,
    vivo: false,
    trajes: ["mark", "mark v", "hulk"]
};

// const imprimePropiedades = (personaje) => {
//     console.log ("nombre", personaje.nombre);
//     console.log ("code name", personaje.codeName);
//     console.log ("edad", personaje.edad);
//     console.log ("vivo", personaje.vivo);
//     console.log ("trajes", personaje.trajes);

// }

const imprimePropiedades = ({nombre, vivo, codeName, trajes, edad = 15}) => {
   
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({trajes});
    console.log({edad});


}

imprimePropiedades(tony);


