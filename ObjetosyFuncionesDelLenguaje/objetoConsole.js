console.log(console);
console.error("esto es un error");
console.warn("esto es un aviso");
console.info("esto es un mensaje informativo");
console.log("un registro de lo que ha pasado en nuestra  aplicacion");


const nombre = "rivaldo";
apellido = "sanchez"
edad = 21;

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(nombre, apellido, edad)

console.log(`Hola mi nombre es ${nombre} ${apellido}, y tengo ${edad} años.`)

console.log(`Hola mi nombre es ${nombre} ${apellido}, y tengo ${edad} años.`)

console.clear() // limpia la consola

console.log(window)
console.log(document)
console.dir(window)
console.dir(document)

console.clear()

// grupos en la consola
console.group("Cursos de programacion")
console.log("node js")
console.log("php")
console.log("java")
console.groupEnd()

console.groupCollapsed("Cursos de programacion")
console.log("node js")
console.log("php")
console.log("java")
console.groupEnd()

console.clear()

// tablas con la consola
console.log(console)
console.table(Object.entries(console).sort())

const numeros = [1, 2, 3, 4, 5, 6]
const vocales = ["a", "e", "i", "0", "u"]

console.table(numeros)
console.table(vocales)

const persona = {
  nombre: "rivaldo",
  apellido: "sanchez",
  edad: 21,
  estado: "complicadisimo"
}

console.table(persona)

console.clear()

console.time("cuanto tiempo tarda mi codigo")

const arr = Array(1000)
for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}

console.timeEnd("cuando tiempo tarda mi codigo")

console.clear()

for (let i = 0; i <= 100; i++) {
  console.count("codigo for")
  console.log(i)
}

console.clear()

