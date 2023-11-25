let a = 10; // cualquier asignacion lo estamos mandando por valor
let b= a; //no importa si transformamos la variable, no afectamos el espacio en memoria
a = 30;
console.log(a,b);

let juan = {nombre : "juan"};
let ana = {...juan};
ana.nombre= "ana";
console.log({juan, ana}) // ahora juan tiene nombre "ana" xq en js todos los objetos son pasados por referencia

// todos los primitivos se pasan por valor
// todos los objetos son pasados por referencia 

const cambiaNombre = ({...persona}) => { //... rompe la referencia 
    persona.nombre = "tony";
    return persona;
};



let peter = {nombre: "peter"};
let tony = cambiaNombre(peter);

console.log({peter, tony})


