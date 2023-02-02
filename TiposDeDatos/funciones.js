function funcionDeclarada() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

// funcionDeclarada(); // invocacion de funciones

function funcionQueDevuelveValor() {
  console.log("uno");
  console.log("dos");
  console.log("tres");

  return ("La funcion a retornado una cadena de texto")
}

// const valorDeFuncion = funcionQueDevuelveValor() 
// console.log(valorDeFuncion);

function saludar(nombre = "Oiler", edad = 60) {
  console.log(`Hola mi nombre es: ${nombre} y tengo ${edad} años`);
}

// saludar();
const funcionExpresada = function () {
  console.log("esto es una funcion expresada");
}
funcionExpresada()