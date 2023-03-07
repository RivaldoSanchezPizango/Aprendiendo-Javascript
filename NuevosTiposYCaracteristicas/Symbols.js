/* 
  Symbol es un tipo de dato primitivo asi como el string, number, boolean, etc..
  son privados y para uso interno, se agregan como caracteristicas de objetos como una propiedad.

  los Symbols nos permiten crear identificadores unicos / identificadores de referencia 
*/
// definicion
let id = Symbol("id");

let id2 = Symbol("id2")

console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)

const NAME = Symbol("nombre")
const SALUDAR = Symbol("saludar")

const persona = {
  [NAME]: "rivaldo"
}

console.log(persona)

persona.NAME = "Rivaldo sanchez"
console.log(persona.NAME)
console.log(persona[NAME])
persona[SALUDAR] = function () {
  console.log("Hola")
}
console.log(persona)
persona[SALUDAR]()

for (let propiedad in persona) {
  console.log(propiedad)
  console.log(persona[propiedad])
}

