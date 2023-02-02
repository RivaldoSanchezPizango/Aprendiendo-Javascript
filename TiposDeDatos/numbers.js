let a = 1;
let b = new Number(2);
const c = 8.2
const d = "5.7"

console.log(a);
console.log(b);
console.log(c.toFixed(6)) // Cuantos numeros decimales va a tener un valor numerico
console.log(parseInt(c)) // Devuelve la parte entera de un numero
console.log(parseFloat(c)) // Devuelve la parte entera y la parte flotante

console.log(typeof (d))

console.log(c + d)
console.log(c + parseInt(d))
console.log(c + parseFloat(d))