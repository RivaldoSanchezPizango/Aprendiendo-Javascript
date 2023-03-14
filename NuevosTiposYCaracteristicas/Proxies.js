/* 
  mecanismo que nos permite crear un objeto basado en un objeto literal inicial.
*/

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
}

const manejador = {
  set(objeto, propiedades, valor) {
    if (Object.keys(objeto).indexOf(propiedades) === -1) {
      return console.log(`La propiedad ${propiedades} no existe en el objeto`)
    }
    objeto[propiedades] = valor
  }
}
//   el proxi recibe el objeto del cual nos vamos a basar y un manejador (handler) 
const rivaldo = new Proxy(persona, manejador)
rivaldo.nombre = "rivaldo"
rivaldo.apellido = "sanchez"
rivaldo.edad = 21
// agregamos propiedades
rivaldo.estado = "casado"

console.log(rivaldo)