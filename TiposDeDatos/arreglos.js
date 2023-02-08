const animales = ["Perro", "Gato", "Gallo", "Delfin", "Leon"];
const personas = ["Ignacio", "Dario", "Ilsen", "Llud", "Genri"];
const arreglos = ["Mesas", "Vasos", ["Platos", "Tenedores"]]
console.log("------------------")
console.log(animales);
console.log(personas);
console.log(arreglos)

console.log(`Estos son animales: 
    ${animales} 
y estos son sus dueños 
    ${personas}
arreglos que contienen arreglos 
    ${arreglos}
    `);

console.log(animales.length) // cantidad de elementos dentro de un array
console.log(animales[1]) // accede al valor de posicion de un array. (posicion empieza de 0)

const nuevaForma = Array.of(2, false, 23, "hola") // nuevas formas de llenar elementos
console.log(nuevaForma)

// const productos = ["leche", "azucar", "cafe", "arroz"]

const fill = Array(100).fill("hola") // El método fill() cambia todos los elementos en un arreglo por un valor estático,
console.log(fill)

const colores = ["rojo", "verde", "azul"]
colores.push("negro") // añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
console.log(colores)

colores.pop() // elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
console.log(colores)

colores.forEach(function (el, index) {         //  ejecuta la función indicada una vez por cada elemento del array.
    console.log(`<li id="${index}">${el}</li>`)
}) 