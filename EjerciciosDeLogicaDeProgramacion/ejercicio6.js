//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const comtarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto")

  if (typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, No es una cadena de texto`)

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
console.log("-------------------------------------------------------")
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
console.log("-------------------------------------------------------")
//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
