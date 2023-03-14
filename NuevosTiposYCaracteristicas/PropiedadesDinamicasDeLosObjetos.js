/*
  En JavaScript, los objetos son dinámicos, esto quiere decir que sus propiedades no 
  tienen por qué ser definidas en el momento en el que creamos el objeto. Podemos añadir 
  nuevas propiedades al objeto en tiempo de ejecución, tan solo indicando el nombre la propiedad y asignándole un valor
  o función.
*/
const aleatorio = Math.round(Math.random() * 100 + 5)

const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`]: " valor aleatorio"
}

const usuario = ["rivaldo", "lucas", "angelica", "Keyla"]

usuario.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios)