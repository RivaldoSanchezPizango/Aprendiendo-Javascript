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
// hasta cierto punto los generadores tambien nos permite manejar comportaminento asincrona 

const iterador = iterable()
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

// el generador es convertir  el codigo de una funcion en iterable

for (let y of iterador) {
  console.log(y)
}

const arr = [...iterable()]
console.log(arr)

function cuadrado(valor) {
  setTimeout(() => {
    console.log({ valor, resultado: valor * valor })
  }, Math.random() * 1000);

  return {
    valor,
    resultado: valor * valor
  }
}

function* generador() {
  console.log("Inicia generador")

  yield cuadrado(1)
  yield cuadrado(2)
  yield cuadrado(3)
  yield cuadrado(4)
  yield cuadrado(5)
  yield cuadrado(0)

  console.log("Termina generador")
}

const gen = generador()

for (y of gen) {
  console.log(y)
}