// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
/* function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste cadena")
  } else {
    console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
  }
} */
const contarCaracteres = (cadena = "") =>
  (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)

contarCaracteres("Hola Mundo");





console.log("------------------------------------------------------------")
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarTexto = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.slice(0, longitud))
// Usando el método slice()
// Este método recibe dos parámetros que indica la posición de inicio y la posición de fin de la cadena de texto a extraer. Lo interesante es que puedes usar índices con valores negativos para indicar valores relativos al final de la cadena de texto.
recortarTexto("Hola mundo", 4)





console.log("------------------------------------------------------------")
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadenaSeparador = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.log("No ingresaste una cadena de texto")
    : (separador === undefined)
      ? console.warn("No ingresaste el caracter separador")
      : console.log(cadena.split(separador))
// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

cadenaSeparador("hola como estas glaciar pan gaseosa ramdon leche papel casa auto avion moto notebook", ",")





console.log("------------------------------------------------------------")
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto")
  if (veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto")
  if (veces === 0) return console.error("El numero de veces no puede ser 0")
  if (Math.sign(veces) === -1) return console.error("El numero de veces es negativo")

  for (let i = 1; i <= veces; i++) {
    console.info(`${texto}, ${i}`)
  }
}

repetirTexto("hola mundo", 3)
repetirTexto("hola mundo", 0)
repetirTexto("hola mundo", -2)
repetirTexto("hola mundo")