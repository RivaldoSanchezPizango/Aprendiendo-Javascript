//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto")

  if (typeof cadena !== "string") return console.log(`El valor ${cadena} ingresado, No es una cadena de texto`)

  let vocales = 0
  consonantes = 0

  cadena = cadena.toLocaleLowerCase()

  for (const letra of cadena) {
    if (/[aeiou]/.test(letra)) {
      vocales++
    }

    if (/[bcdfghjklmnpqrstvwxyz.]/.test(letra)) {
      consonantes++
    }
  }

  return console.info()
}

contarLetras("hola mundo")





console.log("-------------------------------------------------------")
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = "") => {
  if (!nombre) return console.log("No ingresaste un nombre")

  if (typeof nombre !== "string") return console.log(`El valor ${nombre} ingresado, No es una cadena de texto`)


  let expReg = /^[A-Za-zÑñAaEeIiOoUu\s]+$/g.test(nombre)
  return (expReg)
    ? console.info(`${nombre} es un  nombre valido`)
    : console.log(`${nombre} No es un nombre valido`)
}

validarNombre()
validarNombre("rivaldo")
validarNombre("Rivaldo 19")





console.log("-------------------------------------------------------")
//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email = "") => {
  if (!email) return console.log("No ingresaste un nombre")

  if (typeof email !== "string") return console.log(`El valor ${email} ingresado, No es una cadena de texto`)


  let expReg = /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/i.test(email)
  return (expReg)
    ? console.info(`${email} es un correo valido`)
    : console.log(`${email} No es un correo valido`)
}
validarEmail()
validarEmail("osdo")
validarEmail("rivaldosanchezp@gmail.com")




console.log("-------------------------------------------------------")
//Fusion 19 y 20
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.log("No ingresaste una cadena de texto a evaluar")

  if (typeof cadena !== "string") return console.log(`El valor ${cadena} ingresado, No es una cadena de texto`)

  if (patron === undefined) return console.log("No ingresaste una cadena de texto a evaluar")

  if (!(patron instanceof RegExp)) return console.log(`El valor ${patron} ingresado, No es una expresion regular`)

  let expReg = patron.test(cadena)
  return (expReg)
    ? console.info(`${cadena} cumple con el patron ingresado`)
    : console.log(`${cadena} No cumple con el patron ingresado`)
}

validarPatron("rivaldo sanchez", /^[A-Za-zÑñAaEeIiOoUu\s]+$/g)
