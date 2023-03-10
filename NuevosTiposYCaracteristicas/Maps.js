/*
  Los Maps son objetos que nos sirven para almacenar un conjunto de valores asociados a manera de objeto, realmente es
  como si fuera un objeto primitivo y tiene algunas caracteristicas muyn poco usables.
*/

const mapa = new Map()
// Formas de agregar valores hay 2 formas
mapa.set("nombre", "Rivaldo")
mapa.set("apellido", "sanchez")
mapa.set("edad", 21)

console.log(mapa)

// Metodo para saber cuando elementos tiene un Map
console.log(mapa.size)

// comprobar si existe un dato
console.log(mapa.has("hola"))

// metodo para obtener un valor
console.log(mapa.get("nombre"))

// metodo sobreescribir un valor 
mapa.set("nombre", "Rival Sanchez")
console.log(mapa.get("nombre"))

// eliminar elementos de un mapa
mapa.delete("apellido")
console.log(mapa)

// en los mapas podemos generar llaves que no sean cadenas de texto es decir que sean null undefined boolean etc
mapa.set(19, "diecinueve")
mapa.set(false, "falso")
mapa.set({}, {})

// recorrer un mapa
for (let [key, value] of mapa) {
  console.log(`llave: ${key}, valor: ${value}`)
}
console.log("----------------------------")
// segunda manera de inicializar valores para un mapa 
const mapa2 = new Map([
  // para cada llave valor tenemos que poner como si fuera un arreglo dentro de otro arreglo
  ["nombre", ["ilsen"]],
  ["edad", 34],
  ["animal", "perro"]
])

console.log(mapa2)

// recorrer
for ([key, value] of mapa2) {
  console.log(`llave: ${key} valor: ${value}`)
}

// podemos almacenar en una variable a manera de arreglo toda la lista de las llaves y en otro arreglo toda la lista de los valores eso lo podemos hacer con la desestructuracion y de 2 metodos que son (keys y value)
const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2, valoresMapa2)