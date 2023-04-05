console.log("-------------------Objeto URL (location)----------------")
console.log(location)
console.log(location.origin) // ruta de la cual se origina
console.log(location.protocol) // http 
console.log(location.host) // nombre del dominio
console.log(location.hostname) // direccion IP
console.log(location.port) // puerto
console.log(location.href) // URL completa 
console.log(location.hash) // detecta el valor de la url despues de un hash #
console.log(location.search) // almacena los valores que psamos por la URL
console.log(location.pathname) // archivo en el cual consultamos


console.log("------------------- Objeto Historial (history)----------------")
console.log(history) // guarda el almacenamiento del historial en el que nos encontramos
console.log(history.length)
// navegar entre paginas
console.log(history.back) // atras
console.log(history.forward) // adelante
console.log(history.go) // asia donde queremos ir atras o adelante


console.log("------------------- Objeto Navegador (navigator)----------------")
console.log(navigator)
console.log(navigator.connection) // informacion de coneccion
console.log(navigator.geolocation) // geolocalizacion
console.log(navigator.mediaDevices) // dispositivos como camaras y microfonos
console.log(navigator.mimeTypes) // tipos de formatosque soportan las aplicaciomes web
console.log(navigator.onLine) // cuando el usuario pierde la conexion o lo recupera
console.log(navigator.serviceWorker) // convertir aplicaciom a progresive web app
console.log(navigator.storage) // api de almacenamiento
console.log(navigator.usb) // detectar dispositivos 
console.log(navigator.userAgent) 
