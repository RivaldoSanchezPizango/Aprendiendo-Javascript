/* 
  generators - es una sintaxis mas sencilla para generar iteradores
  no es mas que una funcion que nos permite trabajar de una manera mas amigable con la interfaz de un elemento iterable
*/

// asi se declara un generador 
function* iterable() {
  //yield es como un return que va a indicar a la funcion que se va a ejecutar
  yield "hola"
  console.log("Hola consola")
  yield ("hola 2")
  console.log("seguimos con mas instrucciones de nuestro codigo ")
  yield "hola 3"
  yield "hola 4"
}

console.log(iterable())