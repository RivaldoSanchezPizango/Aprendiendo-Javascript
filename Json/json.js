/* 
  JSON es un formato ligero de cambios, 
  Json es un estandar de lenguaje nos va a servir para el javascript de los navegadores pero tambien 
  para el javascript del lado del servidor como nodejs
*/

const json = {
  cadena: "rivaldo",
  numero: 21,
  booleano: true,
  arreglo: ["futbol", "trabajo", "programacion"],
  objeto: {
    facebook: "riva sanchez",
    instagram: "rivaaasan"
  },
  nulo: null
}

console.log(json)

/*
  tiene 2 metodos
  parse = analiza una notacion json es decir una cadena de texto y la va a convertir
  a un tipo de dato que javascript valide como un objeto, un arreglo, un boolean etc

  stringify = convierte un objeto a un valor de javascript en una cadena de texto JSON
*/

console.log(JSON.parse("{}"))
console.log(JSON.parse("[]"))
console.log(JSON.parse("null"))
console.log(JSON.parse("false"))


console.log(JSON.stringify({}))