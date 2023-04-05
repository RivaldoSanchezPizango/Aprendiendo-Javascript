function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.clasName}, el click lo origino ${e.target.clasName}`
  )
}

document.addEventListener("click", (e) => {
  console.log("hice click en ", e.target)

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e)
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital...")
    e.preventDefault()
  }
})
