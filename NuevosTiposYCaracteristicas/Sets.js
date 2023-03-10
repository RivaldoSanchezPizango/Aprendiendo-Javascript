/* 
  El set en una estrucutura similar a un array pero de datos unicos.
  es un arreglo mejorado de javascript que solo acepta valores unicos, valores primitivos
  Los valores de un Set es una collecion de datos unicos
*/

const set = new Set([1, 2, 3, 3, 4, true, false, true, {}, {}, "hola", "Hola"])
console.log(set)
console.log(set.size) // longitud de un set



const set2 = new Set()
// para agregar nuevos elementos en un set add()
set2.add(1)
set2.add(3)
set2.add(4)
set2.add(2)
set2.add(false)
set2.add({})
set2.add(false)
set2.add({})
console.log(set2)
console.log(set2.size)

console.log("Recorriendo Set")


// recorrer los elementos con for of
for (item of set2) {
  console.log(item)
}

console.log("------------------")


// recorre elemento con el metodo foreach
set2.forEach(item => console.log((item)))

console.log("------------")


// convertimos el Set a un Array para Acceder a la posicion de un set con el from
let arr = Array.from(set2)
console.log(arr)
console.log(arr[0])


// Eliminar valores de un Set
set2.delete(4)
console.log(set2)


// Metodo para comprobar si existe un dato dentro de la coleccion de datos
console.log(set2.has(true))



// metodo para limpiar un Set
set2.clear()
console.log(set2)

/* El Set es un nuevo tipo de dato que parece un Array pero simplemente es una estructura de dato similar a un array
  el cual solamente me permite agregar datos unicos. 
*/