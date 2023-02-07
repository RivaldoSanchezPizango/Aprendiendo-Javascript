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