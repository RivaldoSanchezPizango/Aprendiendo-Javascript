const Animal = function (nombre, genero, edad) {
  this.nombre = nombre;
  this.genero = genero;
  this.edad = edad;
}

Animal.prototype.ruidoPerro = function () {
  console.log("guau guau guau")
}

Animal.prototype.ruidoGato = function () {
  console.log("miau miau miau")
}

// Herencia Prototipica
function Persona(nombre, genero, edad, estado) {
  this.super = Animal;

  this.super(nombre, genero, edad)

  this.estado = estado;
}

// Persona esta heredando de animal
Persona.prototype = new Animal();
Persona.prototype.constructor = Persona

// sobreescritura de metodos del prototipo padre en el hijo
Persona.prototype.ruidoPerro = function () {
  console.log("provando cambios en la herencia")
}

Persona.prototype.saludar = function () {
  console.log("hola como estsa")
}

const usuario = new Persona("ilsen", "sanchez", 34, "soltero")
const gato = new Animal("pancho", "hembra", 2)

console.log(usuario)
console.log(gato)

usuario.saludar()
usuario.ruidoPerro()
gato.ruidoGato()