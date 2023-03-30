/*
  
*/

const linkDom = document.querySelector(".link-DOM")
console.log(linkDom.style)
console.log(linkDom.getAttribute("style"))
console.log(linkDom.style.backgroundColor)

// propiedades dinamicas 
console.log(window.getComputedStyle(linkDom))
console.log(getComputedStyle(linkDom).getPropertyValue("color"))

linkDom.style.setProperty("text-decoration", "none")
linkDom.style.setProperty("display", "block")
linkDom.style.with = "50%"
linkDom.style.textAlign = "center"
linkDom.style.marginLeft = "auto"
linkDom.style.marginRight = "auto"
linkDom.style.padding = "1rem"
linkDom.style.borderRadius = "2rem"

console.log(getComputedStyle(linkDom))

// Variables CSS - Custom Properties CSS
const $html = document.documentElement
$body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "pink")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("backgorund-color", varDarkColor)