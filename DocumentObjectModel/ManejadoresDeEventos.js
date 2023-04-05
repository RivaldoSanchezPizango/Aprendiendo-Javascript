/*
  Los eventos es aquel mecanismo que tenemos en Javascript para controlar las acciones del usuario y definir
  ciertos comportamientos del documento que sucedan en cierto momento o cuando se cumplan algunas condiciones

  Las funciones que se ejecutan en un evento es como el ingles se conoce como el eventHandler (manejadores de eventos)

  hay 3 maneras de definir los eventos en javascript
*/

// Cuando una funcion se convierte en un manejador de eventos es decir una funcion que se ejecute en un evento podemos acceder a un objeto especial que es al evento en si (event) 
function holaMundo() {
  alert("Hola mundo")
  console.log(event)
}

// -----------------------------------------------------

// cuando definimos una funcion como si fuera semantico igualamos al nombre de la funcion sin los parentesis
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoMultiple = document.getElementById("evento-multiple");
// desventaja : una vez que definimos el evento semantico solo va a poder ejecutar una sola funcion
$eventoSemantico.onclick = holaMundo;



// -----------------------------------------------------
// otra manera de declarar los manejadores de eventos semanticos es con una funcion anonima o arrow function
$eventoSemantico.onclick() = function (e) {
  alert("Hola Mundo, Manejador de eventos semanticos")
  console.log(e)
  console.log(event)
}

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola manejador de Eventos Multiples")
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(event)
})