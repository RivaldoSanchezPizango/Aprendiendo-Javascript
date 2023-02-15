// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""))

invertirCadena("Hola Mundo")





console.log("-----------------------------------------------------------------------")
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo")
  if (!texto) return console.warn("No ingresaste la palabra a evaluar")

  let i = 0
  contador = 0

  while (i !== -1) {
    i = cadena.indexOf(texto, i)
    if (i !== -1) {
      i++
      contador++
    }
  }
  return console.info(`La palabra ${texto}, se repite ${contador} veces`)
}

textoEnCadena("hola mundo adios mundo", "mundo")





console.log("-----------------------------------------------------------------------")
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase")

  palabra = palabra.toLowerCase()

  let alRevez = palabra.split("").reverse().join("")

  return (palabra === alRevez)
    ? console.info(`Si es palindromo, palabra original ${palabra}, palabra al revez ${alRevez}`)
    : console.info(`No es palindromo, palabra original ${palabra}, palabra al revez ${alRevez}`)
}

palindromo("salas")





console.log("-----------------------------------------------------------------------")
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", patron = "") => {
  (!texto)
    ? console.warn("No ingresaste un texto")
    : (!patron)
      ? console.warn("No ingresaste un patron de caracteres")
      : console.info(texto.replace(new RegExp(patron, "ig"), ""))
}

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")