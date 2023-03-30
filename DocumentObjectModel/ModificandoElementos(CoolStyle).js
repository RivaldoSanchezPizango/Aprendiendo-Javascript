/*
  .insertAdjacent...
    .insertAdjacentElement(position, el) -- agrega un elemento
    .insertAdjacentHTML(position, html)  -- agrega contenido html
    .insertAdjacentText(position, text)  -- recibe 2 elementos
  
  Posiciones:
    beforebegin(hermano anterior) 
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards")
$newCard = document.createElement("figure")

let $contentCard = `
<img src="https://placeimg.com/200/200/Any" alt="Any" />
<figcaption> </figcaption>
`

$newCard.classList.add("card")

$newCard.insertAdjacentHTML("beforeend", $contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
// $cards.insertAdjacentElement("afterbegin", $newCard)

// $cards.prepend($newCard)
$cards.append($newCard)
// $cards.before($newCard)

$cards.after($newCard)