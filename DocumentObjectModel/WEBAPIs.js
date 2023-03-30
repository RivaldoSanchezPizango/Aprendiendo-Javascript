/*
  El DOM es como los navegadores representan el codigo de documentos html y xml para trabajarlo con javascript 
  es una interfaz estandarizada, el dom se queda en el control de los nodos.

*/

console.log(window)
console.log(document)


let texto = "Hola, soy tu ordenador bienvenido"
const hablar = (texto) => speechSynthesis.
  speak(new SpeechSynthesisUtterance(texto))

hablar(texto)