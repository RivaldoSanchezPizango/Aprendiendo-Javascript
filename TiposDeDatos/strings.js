const nombre = "rivaldo";
const apellido = "sanchez";
const saludo = new String("Hola mundo");
const parrafo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quisquam voluptate voluptas iure impedit, est nobis magni tempore non nemo nesciunt distinctio debitis itaque. Dolore, cumque ratione! Itaque consectetur, dolorum commodi obcaecati rem soluta ad dignissimos incidunt quisquam autem non?"

console.log(nombre, apellido, saludo);
// Propiedades Strings
console.log(nombre.length, apellido.length, saludo.length)
// Metodos Strings
console.log(nombre.toUpperCase()); // Mayusculas
console.log(apellido.toLowerCase()); // Minusculas
console.log(parrafo.includes("amet")) // True o False si existe o no alguna palabra o letra
console.log(parrafo.trim()) // Quita espacios en blanco
console.log(parrafo.split(",")) // Genera un arreglo