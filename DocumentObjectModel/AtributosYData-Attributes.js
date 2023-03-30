/*
  Tenemos 2 maneras de interactuar o de mandar a llamar a los atributos o establecer valores 
      notacion del punto
*/

//   notacion del punto
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".link-DOM").href)
console.log(document.querySelector(".link-DOM").getAttribute("href"))

// Para establecer nuevo valor a los atributos
document.documentElement.lang = "es";
console.log(document.documentElement.lang)

document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang)

const linkDom = document.querySelector(".link-DOM")

// atributos
linkDom.setAttribute("target", "_blanks") // establecemos valores que no tienen
linkDom.setAttribute("rel", "noopener") // para evitar que la pestaña sea insegura
linkDom.setAttribute("href", "https://youtube.com/jonmircha")

// validar si un elemento existe
console.log(linkDom.hasAttribute("rel"))
// para quitar elementos
linkDom.removeAttribute("rel")
console.log(linkDom.hasAttribute("rel"))


// Data-attributes
console.log(linkDom.getAttribute("data-description"))
console.log(linkDom.dataset)

// modificar data-attribute
console.log(linkDom.dataset.description)
// establecer nuevos valores
linkDom.setAttribute("data-description", "modelo del objeto del documento")
console.log(linkDom.dataset.description)

linkDom.dataset.description = "suscribite y comparte"
console.log(linkDom.dataset.description)