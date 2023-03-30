/*
  DOM es lo que nos permite manejar html con javascript atravez de los navegadores.
*/

console.log("----------------ELEMENTOS DEL DOCUMENTO-------------------")
console.log(window.document)
console.log(document)
console.log(document.head) // head css
console.log(document.body) // body css
console.log(document.documentElement) // html 
console.log(document.doctype) // tipo de documento
console.log(document.characterSet) // juego de caracteres
console.log(document.title) // titulo 
console.log(document.links) // enlaces
console.log(document.images)  // imagenes
console.log(document.forms)  // formularios del documento
console.log(document.styleSheets)  // hojas de estilo
console.log(document.scripts)  // scripts

setTimeout(() => {
  console.log(document.getSelection().toString())  // Metodo

}, 3000);

document.write(" <h2>Hola mundo desde el DOM</h2>")  //  escribir en el documento