//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined) return console.log("No ingresaste un arreglo de numeros")

  if (!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo")

  if (arr.length === 0) return console.log("El arreglo esta vacio")

  for (let numero of arr) {
    if (typeof numero !== 'number') return console.log(`El valor ${numero} ingresado, No es un numero`)
  }

  const newArr = arr.map(el => el * el)

  return console.log(`Arreglo original ${arr} .\narreglo elevado al cuadrado ${newArr}`)
}

devolverCuadrados()
devolverCuadrados({})
devolverCuadrados([1, 4, 8])







console.log("-------------------------------------------------------")
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const arrayMinMax = (arr = undefined) => {
  if (arr === undefined) return console.log("No ingresaste un arreglo de numeros")

  if (!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo")

  if (arr.length === 0) return console.log("El arreglo esta vacio")

  for (let numero of arr) {
    if (typeof numero !== 'number') return console.log(`El valor ${numero} ingresado, No es un numero`)
  }

  return console.log(`Arreglo original: ${arr}\n Valor Mayor ${Math.max(...arr)}\n Valor Menor ${Math.min(...arr)}`)
}

arrayMinMax([1, 2, 34, 556, 67, 57])





console.log("-------------------------------------------------------")
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const separarParesImpares = (arr = undefined) => {
  if (arr === undefined) return console.log("No ingresaste un arreglo de numeros")

  if (!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo")

  if (arr.length === 0) return console.log("El arreglo esta vacio")

  for (let numero of arr) {
    if (typeof numero !== 'number') return console.log(`El valor ${numero} ingresado, No es un numero`)
  }

  return console.log({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  })
}

separarParesImpares()
separarParesImpares([1, 2, 34, 556, 67, 57])