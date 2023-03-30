/*
  Objeto This hace referencia al objeto global (window)  
  this es identico a window

  cada funcion en javascript crea un contexto 
*/
console.log(this)
console.log(window)
console.log(this === window)

this.nombre = "contexto global"
console.log(this.nombre)

function imprimir() {
  console.log(this.nombre)
}
imprimir()

const objeto = {
  nombre: "contextoobjeto",
  imprimir: function () {
    console.log(this.nombre)
  }
}
objeto.imprimir()

const objeto2 = {
  nombre: "contexto objeto 2",
  imprimir
}
objeto2.imprimir()

const objeto3 = {
  nombre: "contexto objeto 3",
  imprimir
}
objeto3.imprimir()

function Persona(nombre) {
  this.nombre = nombre;
  // return console.log(this.nombre)
  return function () {
    console.log(this.nombre, 22)
  }
}

const rivaldo = new Persona("Rivaldo")
rivaldo()