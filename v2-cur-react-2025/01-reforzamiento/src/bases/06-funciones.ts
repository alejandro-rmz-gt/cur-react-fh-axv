// Una funcion de saludo
function saludar(nombre: string): string {
  return "Hola mundo: " + nombre;
}
// Imprime en consola
console.log(saludar("Alejandro"));

// Funcion de ejemplo con cambio a una funcion de tipo flecha
const saludar2 = (name: string): string => {
  return "Hola mundo: " + name;
};

// Imprime en consola
console.log(saludar2("Alex"));

// Interfaz para definir la estructura de algo
// Debe lucir como esto o debe de tener lo mismo que esto
interface User {
  uuid: string;
  username: string;
}

// return implicito ->
const getUser = (): User => ({
  uuid: "ABC-123",
  username: "El_Papi23",
});

// Imprime en consola
console.log(getUser());

// una funcion que se pasa como argumento a un metodo = callback
const myNumbers = [1, 2, 3, 4, 5, 6];

// Ejemplo de callback
// myNumbers.forEach(function (value) {
//   console.log({ value });
// });

// Call back con funcion de flecha
myNumbers.forEach((value) => {
  console.log({ value });
});
