//Objetos literales

// Esto es un objeto
const person = {
  nombre: "tony",
  apellido: "stark",
  edad: 45,
  direccion: {
    ciudad: "new york",
    zip: 45455554,
    lat: 14.4545454,
    ing: 354.45445,
  },
};

// Imprimiendo el objeto
console.log(
  `El objeto contiene: Nombre: ${person.nombre}, Apellido: ${person.apellido}, y Edad: ${person.edad}`
);

// Imprimiendo el objeto como tabla
console.table(person);

// Haciendo un clon del objeto Persona
const person2 = { ...person };
// Dandole un nuevo nombre al clon del objeto
person2.nombre = "Pablo";

// Imprimiendo los dos objetos
console.log(person);
console.log(person2);
