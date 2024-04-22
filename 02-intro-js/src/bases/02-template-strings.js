// Variables
const nombre = "Alejandro";
const apellido = "Hernandez";

// Usando template Strings con template Strings
const nombrecompleto = `El nombre es ${nombre} ${apellido}`;

// Imprimiendo el contenido
console.log(nombrecompleto);

// Uso de una funcion
function getSaludo(nombre) {
  return "Hola Mundo " + nombre;
}

// Imprimiendo el contenido de una funcion
console.log(`Este es un texto: ${getSaludo("Alex")}`);
