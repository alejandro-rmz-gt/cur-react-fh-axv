import impoExpo, { getHeroesById } from "./bases/08-impo-exp";
import { heroes } from "./data/heroes";

// // Promesas
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     // Importando el archivo de heroes
//     const heroe = getHeroesById(2);
//     resolve(heroe);
//     // reject("no se pudo encontrar el heroes");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe: ", heroe);
//   })

//   .catch((err) => console.warn(err));

const getHeroesByIdAsync = (id) => {
  // Promesas
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // Importando el archivo de heroes
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("no se pudo encontrar el heroes");
      }
    }, 2000);
  });
};

getHeroesByIdAsync(1).then(console.log).catch(console.warn);
