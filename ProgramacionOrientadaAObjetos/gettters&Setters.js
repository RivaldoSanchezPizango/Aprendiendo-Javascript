class Animal {
  // constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = null;
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

  // un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log("los perros somos los mejores amigos del hombre")
  }

  // los setters y getters son metodos especiales que nos permiten establecer y obtener valores de atributos de nuestra clase
  get getRaza() {
    return this.raza
  }
  set setRaza(raza) {
    this.raza = raza
  }
}

Perro.queEres()


const pancho = new Perro("pancho", "macho", 4)
const lazy = new Animal("lazy", "hembra")

console.log(pancho)
pancho.ruido()
pancho.saludar()

console.log(lazy)
lazy.ruido()
lazy.saludar()

console.log(pancho.getRaza)
pancho.setRaza = "chihuawa"
console.log(pancho.getRaza)