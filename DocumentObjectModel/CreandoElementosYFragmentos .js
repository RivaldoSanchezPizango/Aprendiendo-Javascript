/*
  un elemento es una etiqueta html
*/

const $figure = document.createElement("figure")
$img = document.createElement("img")
$figcaption = document.createElement("figcaption")
$figcaptiontext = document.createTextNode("Animals")
$cards = document.querySelector(".cards")

$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptiontext)
$figure.appendChild($img)
$figure.appendChild($figcaption)

$cards.appendChild($figure)  // metodo para agregar un hijo


console.log("------------------------------------------------")



const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
$ul = document.createElement("ul")

document.write("<h3> Estaciones del Año </h3>")

document.body.appendChild($ul)
estaciones.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el;
  $ul.appendChild($li)
})


console.log("------------------------------------------------")
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"]
$ul2 = document.createElement("ul");

document.write("<h3> Continentes del Mundo </h3>")
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach(el => {
  $ul2.innerHTML += `<li>${el}</li>`
})


console.log("------------------------------------------------")
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

$ul3 = document.createElement("ul")
$fragment = document.createDocumentFragment()

meses.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el
  $fragment.appendChild($li)
})

document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)