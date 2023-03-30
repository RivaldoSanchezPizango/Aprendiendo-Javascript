/*
  Javascript nos ofrece 3 metodos que nos permiten conservar la referencia de un scope 
  en particular y utilizarlo en alguna invocacion en algun codigo, para nos sirve
  los metodos call - apply - bind

  call y aplly son muy parecidos 
  bind
*/

console.log(this)
this.lugar = "contexto global"

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde ${this.lugar} `)
}

saludar()

const objeto = {
  lugar: "contexto objeto"
}

// call recibe como parametro un objeto el cual va a ser el contexto 
saludar.call(objeto, "Hola", "rivaldo")
// apply recibe una serie de parametros mas 
saludar.apply(objeto, ["adios", "rivaldo"])

const persona = {
  nombre: "rivaldo",
  saludar: function () {
    console.log(`Hola ${this.nombre}`)
  }
}

persona.saludar()

const otraPersona = {
  saludar: persona.saludar.bind(persona)
}

otraPersona.saludar()