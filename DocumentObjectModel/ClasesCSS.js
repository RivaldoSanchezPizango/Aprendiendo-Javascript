const $card = document.querySelector(".card")
console.log($card)
console.log($card.className)
console.log($card.classList)

// metodos
console.log($card.classList.contains("rotate-45")) // evalua si tiene una clase en particular
$card.classList.add("rotate-45") // agregar una clase
console.log($card.classList.contains("rotate-45")) // evalua si tiene una clase en particular
$card.classList.remove("rotate-45") // quitar una clase
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45") // add y remove 
$card.classList.replace("rotate-45", "rotate-135")  // reemplaza 

$card.classList.add("opacity-80", "sepia") // podemos agregar mas de una clase a la vez 
$card.classList.remove("rotate-45") // podemos quitar mas de una clases a la vez
