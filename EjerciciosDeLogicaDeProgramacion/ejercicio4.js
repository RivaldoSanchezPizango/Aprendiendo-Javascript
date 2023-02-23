// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero")

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, No es un numero`)

  if (numero === 0) return console.error("El numero no puede ser 0")

  if (numero === 1) return console.error("El numero no puede ser 1")

  if (Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

  for (let i = 2; i < numero; i++) {
    if ((numero % i) === 0) {
      divisible = false
      break;
    }
  }

  return (divisible)
    ? console.log(`El numero ${numero}, No es primo`)
    : console.log(`El numero ${numero}, Si es primo`)
}

numeroPrimo(22)
numeroPrimo("22")





console.log("--------------------------------------------------------------")
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numeroPar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero")

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, No es un numero`)

  return ((numero % 2) === 0)
    ? console.info(`El numero ${numero} es Par`)
    : console.info(`El numero ${numero} es Impar`)
}

numeroPar(24)
numeroPar("24")
numeroPar(23)





console.log("--------------------------------------------------------------")
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn("No ingresaste grados a convertir")

  if (typeof grados !== "number") return console.error(`El valor ${grados} ingresado, No es un numero`)

  if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir")

  if (typeof unidad !== "number") return console.error(`El valor ${unidad} ingresado, No es una cadena de texto`)

  if (unidad.lenght !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")

  if (unidad === "C") {
    return console.info(`${grados}ºC = ${Math.round((grados * (9 / 5)) + 32)} ºF`)
  } else if (unidad === "F") {
    return console.info(`${grados}ºF = ${Math.round(((grados - 32) * (5 / 9)))} ºC`)
  }
}

convertirGrados(100, "C")