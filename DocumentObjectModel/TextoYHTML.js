const $whatIsDom = document.getElementById("que-es")

let text = `
  <p>
  El modelo de objetos del documento (DOM document object model) es una API
  para documentos HTML y XML
  </p>

  <p>
  Este provee una representacion estructural del documento, permitiendo modificar su contenido y
  presentacion visual mediante codigo js
  </p>

  <p>
  El DOM no es parte de la especificacion de Javascript, es una API para los navegadores
  </p>
`

// como modificamos el contenido de tal selector y reemplaxarlo por otro (para eso tenemos varias propiedades)

// propiedad para internet explorer, innerText no reconoce las etiquetas html las imprime como si fueran texto (no forma parte del estandar)
$whatIsDom.innerText = text; // si solo necesitamos insertar codigo html

// propiedad que forma parte del estandar textContent
$whatIsDom.textContent = text; // si solo necesitamos insertar texto

// reemplaza el elemento del DOM
$whatIsDom.outerHTML = text;