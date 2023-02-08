/* const animal = {
  nombre: "snoopy",
  sonar() {
    console.log("hago sonudos porque estoy vivo")
  }
}


const animal2 = {
  nombre: "Lola Buuny",
  sonar() {
    console.log("hago sonudos porque estoy vivo")
  }
}

console.log(animal)
console.log(animal2) */

// FUNCION CONSTRUCTORA

/* function Animal(nombre, genero) {
  // atributos
  this.nombre = nombre;
  this.genero = genero;

  // metodos
  this.sonar = function () {
    console.log("hago ruido por que estoy vivo")
  }

  this.saludar = function () {
    console.log("hola ")
  }
} */

function Animal(nombre, genero) {
  // atributos
  this.nombre = nombre;
  this.genero = genero;
}

// metodos
Animal.prototype.sonar = function () {
  console.log("hago ruido por que estoy vivo")
}

Animal.prototype.saludar = function () {
  console.log("hola ")
}

const snoopy = new Animal("snoopy", "macho")
const lolaBunny = new Animal("Lola Bunny", "Hembra")

console.log(snoopy)
console.log(lolaBunny)



function Personas(nombre, apellido, edad) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad

  // this.saludemos = function () {
  //   console.log("hola")
  // }
}

Personas.prototype.saludemos = function () {
  console.log("hola como estas")
}

const persona1 = new Personas("oiler", "sanchez", 60)
const persona2 = new Personas("Lidia", "Pizango", 59)
const persona3 = new Personas("wilfredo", "sanchez", 70)

console.log(persona1)
console.log(persona2)
console.log(persona3)