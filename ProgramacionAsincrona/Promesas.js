/* 
  las promesas trabajan con 2 recursos principales. resolve y reject
*/
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value
      })
    }, 0 | Math.random() * 1000);
  })
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1)
  }) // recibe la parte positiva de la promesa osea el (resolve)
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(2)
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(3)
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(4)
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    console.log("Fin de la promesa")
  })
  .catch((error) => { console.log(error) }) // recibe el error (reject)

  // cuando tenemos una funcion que devuelve una promesa tenemos 2 metodos para trabajar la asincronia (tenemos el metodo then() > es el siguiente bloque  que se va a ejecutaruna vez que se cumpla la funcion inicial podemos tener los then que necesitamos, y al final tenemos el metodo catch() > es el que captura el error resultante del reject)