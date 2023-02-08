class Animal {
  // constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero
  }
  // metodos
  ruido() {
    console.log("hago ruido porque estoy vivo")
  }

  saludar() {
    console.log(`hola, mi nombre es ${this.nombre}`)
  }

}
// herencia
class Perro extends Animal {
  constructor(nombre, genero, edad) {
    // con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.edad = edad
  }

  // sobreescritura de metodo
  ruido() {
    console.log("soy un perro y mi sonido es un ladrido")
  }

  ladrar() {
    console.log("guau guau ")
  }
}


const pancho = new Perro("pancho", "macho", 4)
const lazy = new Animal("lazy", "hembra")

console.log(pancho)
pancho.ruido()
pancho.saludar()

console.log(lazy)
lazy.ruido()
lazy.saludar()


class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero
  }

  saludar() {
    console.log("hola buenos dias")
  }
}

const Ilsen = new Persona("ilsen", 34, "masculino")
console.log(Ilsen)

class Hermano extends Persona {

  constructor(nombre, edad, genero, estado) {
    super(nombre, edad, genero);
    this.estado = estado
  }

  saludar() {
    console.log(`hola mi nombre es ${this.nombre}`)
  }
}

const genrry = new Hermano("genrri", 34, "masculino", "masculino")

console.log(genrry)
