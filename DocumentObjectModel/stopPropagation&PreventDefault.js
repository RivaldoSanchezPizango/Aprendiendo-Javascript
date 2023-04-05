const $divEventos = document.querySelectorAll(".eventos-flujo div")
$linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.clasName}, el click lo origino ${e.target.clasName}`
  )
  e.stopPropagation(); // metodo para detener la propagacion
}

console.log($divEventos)

$divEventos.forEach((div) => {
  div, addEventListener("click", flujoEventos)
  /*div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  })*/
})

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital...")
  e.preventDefault()
})