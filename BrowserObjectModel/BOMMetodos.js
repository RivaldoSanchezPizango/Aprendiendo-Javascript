//window.alert("alerta")
//window.confirm("confirmar")
//window.prompt("Aviso")
const $btnAbrir = document.getElementById("abrir-ventana")
const $btnCerrar = document.getElementById("cerrar-ventana")
const $btnImprimir = document.getElementById("imprimir-ventana")

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("http://jonmircha.com") //abrir una ventana
})

$btnCerrar.addEventListener("click", (e) => {
  //window.close() //cerrar ventana con referencia en variable
  ventana.close()
})

$btnImprimir.addEventListener("click", (e) => {
  window.print()
})
