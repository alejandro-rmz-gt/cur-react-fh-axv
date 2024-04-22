// Desestructuracion de arreglo

const personajes = ["Goku", "Vegueta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// desestructurtacion de un arreglo
const [, , nuevoNombre] = personajes;

console.log(nuevoNombre);

// Funcion quw retorna a un arreglo\
const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
const useSkatate = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola devs");
    },
  ];
};

const [nombre, setNombre] = useSkatate("Goku");
console.log(nombre);
setNombre();

// ??????????????????????????????