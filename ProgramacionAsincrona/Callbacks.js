/* una CALLBACK o llamada de vuelta  es una funcion que se va a ejecutar despues de que otra lo haga, es el mecanismo
invocar a algunas funciones*/
// es el primer mecanismo para manejar la asincronia 
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value)
  }, 0 | Math.random() * 1000);
}

//callback hell
cuadradoCallback(0, (value, resultado) => {
  console.log("Inicia callback")
  console.log(`Callback ${value}, ${resultado}`)

  cuadradoCallback(1, (value, resultado) => {
    console.log(`Callback ${value}, ${resultado}`)

    cuadradoCallback(2, (value, resultado) => {
      console.log(`Callback ${value}, ${resultado}`)

      cuadradoCallback(3, (value, resultado) => {
        console.log(`Callback ${value}, ${resultado}`)

        cuadradoCallback(4, (value, resultado) => {
          console.log(`Callback ${value}, ${resultado}`)

          cuadradoCallback(5, (value, resultado) => {
            console.log(`Callback ${value}, ${resultado}`)
          })
        })
      })
    })
  })
})

/*
  el camino para mejorar una estructura de callbacks en un codigo asincrono,
  el siguiente paso  seria modulizarlo y utilizar las promesas, los generadores o las funciones asincronas
  que son los siguientes mecanismos dentro de la asincronia en javascript
*/