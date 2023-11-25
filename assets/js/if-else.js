


const hoy = new Date();
let dia = hoy.getDay();
console.log({dia})

if ( dia === 0 ) {
    console.log ("domingo ");
}else if ( dia === 1) {
    console.log("lunes");
} else if (dia === 2) {
    console.log("es martes")
}else {
    console.log("no es lunes ni martes ni domingo")
}
dia = 10; 

let weekDay = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado"
}

console.log(weekDay[dia] || "dia no definido");