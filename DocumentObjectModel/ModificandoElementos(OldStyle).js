/*
  
*/

const $cards = document.querySelector(".cards")
$newCard = document.createElement("figure")

$cloneCards = $cards.cloneNode(true) // clonar

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/Any" alt="Any" />
<figcaption> Any </figcaption>
`

$newCard.classList.add("card")

// $cards.insertBefore($newCard, $cards.firstElementChild)  //insertar un nodo antes de tomar referencia 
// $cards.removeChild($cards.lastElementChild)  // metodo para eliminar
// $cards.replaceChild($newCard, $cards.children[2])  // metodo para reemplaza
// metodo para clonar

document.body.appendChild($cloneCards)