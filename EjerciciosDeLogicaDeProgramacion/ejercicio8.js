// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined) return console.log("No ingresaste un arreglo de numeros")

  if (!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo")

  if (arr.length === 0) return console.log("El arreglo esta vacio")

  for (let numero of arr) {
    if (typeof numero !== 'number') return console.log(`El valor ${numero} ingresado, No es un numero`)
  }

  return console.log({
    arr,
    ascendente: arr.map(el => el).sort(),
    descendente: arr.map(el => el).sort().reverse()
  })
}

ordenarArreglo()
ordenarArreglo("hola")
ordenarArreglo({})
ordenarArreglo([2, 3, 1, 4, 3, 2, 4, 5, 5])





console.log("--------------------------------------------------")
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.log("No ingresaste un arreglo de numeros")

  if (!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo")

  if (arr.length === 0) return console.log("El arreglo esta vacio")

  if (arr.length === 1) return console.log("El arreglo debe tener al menos 2 arreglos")

  // return console.log({
  //   original: arr,
  //   sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
  // })

  return console.log({
    original: arr,
    sinDuplicados: [...new Set(arr)]
  })
}

quitarDuplicados()
quitarDuplicados([])
quitarDuplicados([2])
quitarDuplicados([true, true, false, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8])


console.log("--------------------------------------------------")
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arr = undefined) => {
  if (arr === undefined) return console.log("No ingresaste un arreglo de numeros")

  if (!(arr instanceof Array)) return console.log("El valor que ingresaste no es un arreglo")

  if (arr.length === 0) return console.log("El arreglo esta vacio")

  for (let numero of arr) {
    if (typeof numero !== 'number') return console.log(`El valor ${numero} ingresado, No es un numero`)
  }

  return console.log(
    arr.reduce((total, num, index, arr) => {
      total += num
      if (index === arr.length - 1) {
        return (`El promedio de ${arr.join("+")} es${total / arr.length} `)
      } else {
        return total
      }
    })
  )
}

promedio()
promedio([])
promedio(true)
promedio([1, 2, 3, 4, 5, 6])