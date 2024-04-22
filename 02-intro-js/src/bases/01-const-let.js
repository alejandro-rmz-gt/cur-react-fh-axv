//-----------------------
// Variables y Constantes
//-----------------------

// Variable de nombre
const nombre = "Fernando";

// Variable apellido
let apellido = "Herrera";

// Variable con un valor
let valordado = 5;

// cuando es constante el valor no se puede estar cambiando
valordado = 10;

// mostrando los valores de las variables
console.log("Mostrando valores de prueba: " + nombre, apellido, valordado);

// bloque de if
if (true) {
  // Dentro del bloque si se puede tener otra constante que sea nombrada de la misma manera pero con un contenido distinto
  const nombre = "Pedro";
  // Cambiando el valor dentro del bloque de codigo
  let valordado = 6;
  // Mostrando los valores
  console.log("Este es el valor dentro del if: " + valordado);
}

// Fuera de bloque
console.log("Este es el valor fuera de if: " + valordado);

//---------------------------
// ! Nunca se debe de usar VAR
//---------------------------