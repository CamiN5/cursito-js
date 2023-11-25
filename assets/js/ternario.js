// dias de semanas se abren a las 11,
// fines de semana se abre a las 9
// se debe consultar si esta abierto o no 

const dia = 0;
const hora = 11;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log("fin de semana");
//     horaApertura = 9;
// }else {
//     console.log("dia de semana");
//     horaApertura = 11;
// }

// if (hora >= horaApertura) {
//     console.log("esta abierto");
// }else {
//     console.log("esta cerrado, hoy abrimos a las " + horaApertura);
// }

//! ternario

horaApertura = ([0,6].includes(dia)) ? 9 : 11;  //includes es funcion de arreglos para saber si algo esta incluido dentro

mensaje = (hora >= horaApertura) ? "esta abierto" : `esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log( mensaje);

//cuanto se usa `` se puede concatenar con ${} (no se usa mas concatenar con +)


const amigo = false;

 const amigosArr = ["peter", "tony", "dr strange", amigo ? "thor" : "loki" ];
 console.log(amigosArr);


 const nota = 55;
 const grado = nota >= 95  ? "A+" : 
                nota >= 90 ? "A" :
                nota >= 80 ? "B" :
                nota >= 70 ? "C" :
                nota >= 60 ? "D" : "F";

console.log(`la nota es ${grado}`)



 