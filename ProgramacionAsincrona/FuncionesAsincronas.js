/* 
  las funciones asincronas van a esperar a que algo se cumpla para poder seguir ejecutando
  el proceso que estemos trabajando en ese momento, las funciones asincronas trabajan en conjunto con las
  promesas, 
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

// funcion asincrona (async)
async function funcionAsincronaDeclarada() {
  // para el manejo de errores
  try {
    console.log("Inicio de funcion asincrona")
    let obj = await cuadradoPromise(0)
    console.log(`Async function: ${obj.value}, ${obj.result}`)
    //await espera el resultado de la ejecuacion antes de pasar a la siguiente linea
    obj = await cuadradoPromise(1)
    console.log(`Asyng function ${obj.value}, ${obj.result}`)
  } catch (error) {
    console.log(error)
  }
}

funcionAsincronaDeclarada()


const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio de funcion asincrona")
    let obj = await cuadradoPromise(0)
    console.log(`Async function: ${obj.value}, ${obj.result}`)
    //await espera el resultado de la ejecuacion antes de pasar a la siguiente linea
    obj = await cuadradoPromise(1)
    console.log(`Asyng function ${obj.value}, ${obj.result}`)
  } catch (error) {
    console.log(error)
  }
}

funcionAsincronaExpresada()