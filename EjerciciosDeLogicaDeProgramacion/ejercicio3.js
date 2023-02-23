// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = () => console.info(Math.round((Math.random() * 100) + 500))

numeroAleatorio(100)





console.log("--------------------------------------------------------------------------")
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresate un numero")

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, No es un numero`)

  numero = numero.toString()
  let alReves = numero.split("").reverse().join("")

  return ((numero) === alReves)
    ? console.info(`Si es capicua, numero original ${numero}, numero al revez ${alReves}`)
    : console.info(`No es capicua, numero original ${numero}, numero al revez ${alReves}`)
}

capicua(2323)
capicua(212.212)





console.log("--------------------------------------------------------------------------")
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero")

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, No es un numero`)

  if (numero !== 0) return console.error("El numero no puede ser cero")

  if (Math.sign(numero) === -1) console.error("El numero no puede ser negativo")

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i
  }

  return console.info(`El factorial de ${numero} es ${factorial}`)
}

factorial("ad")
factorial(33445)