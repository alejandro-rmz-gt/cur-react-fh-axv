// Importando el archivo con el arreglo de datos
import { heroes } from "../data/heroes"; // Importa el arreglo 'heroes' desde un archivo llamado 'heroes.js' en una carpeta llamada 'data'

// Imprimiendo el arreglo
console.log(heroes); // Imprime el arreglo 'heroes' en la consola

// Definiendo una función llamada 'getHeroesById' que busca un héroe por su id
export const getHeroesById = (id) => {
  return heroes.find((hero) => hero.id === id); // Utiliza el método 'find()' para buscar un héroe en el arreglo 'heroes' cuyo 'id' coincida con el 'id' pasado como argumento
};

// Llamando a la función 'getHeroesById' con el id 4 y luego imprimiendo el resultado
console.log(getHeroesById(4)); // Imprime el héroe con el id 4, si existe, en la consola

// Definición de una función llamada 'getHeroesOwner' que filtra héroes por su propietario
export const getHeroesOwner = (owner) => {
  // Usando el método 'filter()' en el arreglo 'heroes' para filtrar los héroes
  return heroes.filter((hero) => hero.owner === owner);
};

// Llamando a la función 'getHeroesOwner' con el argumento "DC" y luego imprimiendo el resultado
console.log(getHeroesOwner("DC"));
