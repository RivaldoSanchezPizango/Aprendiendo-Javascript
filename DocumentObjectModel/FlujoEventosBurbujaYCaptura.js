/*
  hay 2 maneras en como se va propagando el evento.
  fase de burbuja del elemento mas interno se propaga hasta el elemento padre superior.
*/

const $divsEventos = document.querySelectorAll(".eventos-flujo div")
console.log($divsEventos)

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
}

$divsEventos.forEach(div => {
  div.addEventListener("click", flujoEventos)
})