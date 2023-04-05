/*
  No es mas que una serie de metodos, propiedades y objetos...
  hacen referencia a la ventana del navegador es decir al objeto windown
*/
window.addEventListener("resize", (e) => {
  console.clear()
  console.log("--------Evento risize-------------")
  console.log(window.innerWidth) // referencia al tamaño del ancho del viewport
  console.log(window.innerHeight)

  console.log(window.outerWidth) // referencia al tamaño de ventana
  console.log(window.outerHeight)

  console.log(e)

})



window.addEventListener("scroll", (e) => {
  console.clear()
  console.log("--------Evento scroll-------------")
  console.log(window.scrollX)
  console.log(window.scrollY)

  console.log(e)
})




window.addEventListener("load", (e) => { // se ejecuta justamente cuando la ventana del navegador termine de cargar
  console.log("--------Evento load-------------")
  console.log(window.screenX)
  console.log(window.screenY)

  console.log(e)
})


document.addEventListener("DOMContentLoaded", (e) => {
  console.log("--------Evento DOMContentLoaded-------------")
  console.log(window.screenX)
  console.log(window.screenY)

  console.log(e)
})