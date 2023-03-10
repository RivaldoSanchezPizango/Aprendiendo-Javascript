/* 
  son los hermanos pequeños de sets y maps
    WeakSets & WeakMaps = mapas debiles y conjuntos debiles, se refiere a que solamente puede almacenar referencias
    debiles es decir que las llaves deben ser de tipo objeto, al ser debiles recordemos que cuando creamos un objeto
    corriente en javascript eso genera una referencia y al ser una referencia debil esto permite al recolector de
    basura de javascript que en el momento que algunas de las referencias debiles que tengas estos WeakSets & WeakMaps
    cuando el recolector de basura ejecute el proceso todas las referencias debiles al ya no existir las limpia 
    y esto hace una mejora del rendimiento de aplicacion.

    WeakSets & WeakMaps tiene algunas carencias no podemos iterar sobre las claves o los valores (no podemos recorrerlos)
    tampoco podemos borrar los elementos de una sola, solo podemos eliminar de uno en uno tampoco podemos verificar
    el tamaño no tienen la propiedad size.
*/

console.log("---------WeakSets---------------")
let weakSets = new WeakSet()
let valor1 = { "valor:": 1 }
let valor2 = { "valor:": 2 }
let valor3 = { "valor:": 3 }

weakSets.add(valor1)
weakSets.add(valor2)

console.log(weakSets)

// evaluar si existe una referencia
console.log(weakSets.has(valor2))
console.log(weakSets.has(valor3))

// eliminar una referencia
weakSets.delete(valor2)
console.log(weakSets)

//  agregar valores
weakSets.add(valor2)
weakSets.add(valor3)

console.log(weakSets)

// ejecutamos un set interval que nos imprime las referencias de un weakSet 
setInterval(() => console.log(weakSets), [1000])

// cuando alguna de sus propiedades se vuelve null o undefined en automatico se eliminan
setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);


console.log("---------WeakMaps---------------")

const weakMaps = new WeakMap()

let llave1 = {}
let llave2 = {}
let llave3 = {}

weakMaps.set(llave1, 1)
weakMaps.set(llave2, 2)
weakMaps.set(llave3, 3)

console.log(weakMaps)

setInterval(() => { console.log(weakMaps) }, 1000);
setTimeout(() => {
  llave1 = null
  llave2 = null
  llave3 = null
}, 5000);