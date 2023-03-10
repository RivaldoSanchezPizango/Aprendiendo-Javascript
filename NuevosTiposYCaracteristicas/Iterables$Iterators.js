/* 
  se conoce como iterador es la interfaz que es una especie de apuntador que va recorriendo los elementos y las
  estructuras de la misma estructura de datos.
  iterable es el elemento el cual su contenido se puede recorrer.
  iterador es el mecanismo que esta recorriendo los elementos.
  Podemos tener diferentes mecanismos para recorrer o consumir un elemento iterable:
    la destructuracion, los metodos for.
  para acceder a la interfaz directa de un iterador y con un metodo especial que se llama (next) esta
  recorriendo cada uno de los elemento que tenga nuestra estructura iterable
*/

const iterable = [1, 2, 3, 4, 5]
// accedemos a la interfaz del iterador
const iterador = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)

// para recorrer cada elemento se usa el metodo next()
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())

// simplificamos
let next = iterador.next()

while (!next.done) {
  console.log(next.value)
  next = iterador.next()
}

// el iterador es una interfaz especial que al cual podemos acceder a todo tipo de dato que sea iterable