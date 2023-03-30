/*
  un nodo y una etiqueta html no son iguales.
*/

// Metodos que ya no se utilizan
console.log(document.getElementsByTagName("li")) // trae todos los elementos por el nombre de etiqueta
console.log(document.getElementsByClassName("card")) // trae a los elementos por el nombre de clase
console.log(document.getElementsByName("nombre")) // accedemos a travez del atributo name (forms)
console.log(document.getElementById("menu")) // identificador unico (selectores) ID

// aquellos metodos fueron reemplazados por los siguientes
/*
  recibe como parametro un selector valido de css etc...
  solo te trae el primer selector del tipo que especificamos que haya encontrado en el documento html
*/
console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))

/*
  trae todod los selectores del tipo que especificamos
*/
console.log(document.querySelectorAll("a"))

document.querySelectorAll("A").forEach((el) => console.log((el)))

// para acceder a algun elemento en particular 
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])

// selectores descendientes
console.log(document.querySelectorAll("#menu li"))

