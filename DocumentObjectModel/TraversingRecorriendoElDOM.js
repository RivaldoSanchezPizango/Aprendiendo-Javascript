
/*
Traversing: Recorriendo el DOM
  No es mas que una serie de propiedades que nos da el API  del DOM para poder recorrer
  diferentes elementos.
*/

// Metodos para recorrer los elementos
const $cards = document.querySelector(".cards")
console.log($cards)
console.log($cards.children) // hijos
console.log($cards.children[2]) // hijo en especifico
console.log($cards.parentElement) // elemento padre
console.log($cards.firstElementChild) // detectar el primer elemento
console.log($cards.lastElementChild) // detectar el primer elemento


console.log($cards.previousSibling) // referencia los nodos (anteriores)
console.log($cards.nextSibling)

console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)

console.log($cards.closest("div"))  