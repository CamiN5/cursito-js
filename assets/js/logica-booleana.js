
//! and
// va a ser true, si todos los valores son true

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true && !false); //true

//Si lo primero es falso no se sigue ejecutando la funcion 

const a1 = true && "hola mundo" && 120; //evalua el ultimo valor
const a2 = true && "hola" && false && true;  //false, xq todos los valores deben ser true 
console.log({a1, a2});

//! or
// para que sea true, al menos una condicion debe ser true y lo demas no sigue 

console.log(true || false ); //true
console.log(false || false); //false 
console.log(false || true); //true

 
const a3 = false || "ya no soy falso"; 
const a4 = false || null || undefined || "no soy falso" || true; //cuando encuentra un valor true no sigue ejecutando
console.log({a3, a4});