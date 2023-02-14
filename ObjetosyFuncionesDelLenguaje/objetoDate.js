console.log(Date())

const fecha = new Date()
console.log(fecha)
console.log(fecha.getDate()) // Dia del mes
console.log(fecha.getDay()) // Dia de la semana = D-0, L-1, M-2, M-3, J-4, V-5, S-6
console.log(fecha.getMonth()) // Mes 
console.log(fecha.getFullYear()) // Año
console.log(fecha.getHours()) // horas
console.log(fecha.getMinutes()) // minutos
console.log(fecha.getSeconds()) // segundos
console.log(fecha.getMilliseconds()) // milisegundos

console.log(fecha.toString())
console.log(fecha.toDateString()) // extraemos solo la parte de la fecha
console.log(fecha.toLocaleString())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
console.log(fecha.getTimezoneOffset())

console.log(fecha.getUTCDate())
console.log(Date.now())

const rivaldo = new Date(2001, 13, 12)
console.log(rivaldo)