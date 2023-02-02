const objeto = {
  nombre: "rivaldo",
  edad: 20,
  soltero: true,
  hobbie: ["futbol", "mobile"],
  estudios: {
    primaria: "I.E 0018",
    secundaria: "Jose Maria Arguedas",
    universidad: undefined
  },
  saludar() {
    console.log(`hola :)`)
  },
  decirMiNombre() {
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`)
  }
}

console.log(objeto)
console.log(objeto["edad"]) // acceder a los valores de un objeto []
console.log(objeto.edad) // acceder de la forma correcta
console.log(objeto.hobbie)
console.log(objeto.hobbie[0])
console.log(objeto.estudios.secundaria)

objeto.saludar()
objeto.decirMiNombre()