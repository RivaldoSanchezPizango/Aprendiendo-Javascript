setTimeout(() => {
  console.log("ejecutando un set Timeout")
}, 1000);

setInterval(() => {
  console.log("se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 2000);

// RELOJ EN EL NAVEGADOR
setInterval(() => {
  console.log(new Date().
    toLocaleDateString()
  )
}, 1000);

const temporizador = setInterval(() => {
  console.log(new Date().
    toLocaleDateString()
  )
}, 1000);
clearInterval(temporizador);
console.log("despues del clearInterval")



const temporizador2 = setTimeout(() => {
  console.log(new Date().
    toLocaleDateString()
  )
}, 1000);
clearTimeout(temporizador);
console.log("despues del clearTimeout")