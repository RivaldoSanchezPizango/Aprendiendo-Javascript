function saludar(nombre) {
  nombre = nombre || "desconocido" // esto es un cortocircuito
  console.log(`Hola mi nombre es ${nombre}`)
}


saludar("rivaldo")
saludar()

console.log("cadena" || "valor desconocido")
console.log(21 || "valor de la derecha")
console.log(true || "valor de la derecha")
console.log([] || "valor de la derecha")
console.log({} || "valor de la derecha")
console.log(false || "valor de la derecha")
console.log(null || "valor de la derecha")
console.log(undefined || "valor de la derecha")
console.log("" || "valor de la derecha")
console.log(-2 || "valor de la derecha")
console.log(0 || "valor de la derecha")

