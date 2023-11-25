const heroes = ["batman", "superman", "mujer maravilla", "aquaman"];

// for (let i = 0; 9 < heroes.length ; i++) {
//     console.log (heroes[i]);
// }

//! for in
for (let i in heroes ){ // es lo mismo de arriba pero con codigo mas limpio
    console.log(heroes [i]);
}

//! for of

for (let heroe of heroes ) { //se pone en ves del i, el singular del arreglo
    console.log(i);
}