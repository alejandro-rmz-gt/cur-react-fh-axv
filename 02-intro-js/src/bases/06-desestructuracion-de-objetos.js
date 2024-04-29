// Definición del objeto persona con tres propiedades: nombre, edad y clave
const persona = {
  nombre: "Tony",
  edad: 25,
  clave: "Iron Man",
};

// Desestructuración del objeto persona para obtener la propiedad nombre
const { nombre } = persona;

// Impresión del valor de la propiedad nombre
console.log(nombre);

// Definición de una función useContexts que recibe un objeto como argumento y
// devuelve un nuevo objeto con las propiedades nombreClave y anios
const useContexts = ({ nombre, edad, rango = "capitan" }) => {
  // Impresión de las propiedades nombre, edad y rango (comentado)
  // console.log(nombre, edad, rango);
  // Devolución de un objeto con las propiedades nombreClave y anios
  return {
    nombreClave: nombre,
    anios: edad,
    lating: {
      lat: 14.4545,
      lng: -12.4545,
    },
  };
};

// Llamada a la función useContexts con el objeto persona como argumento
// La desestructuración del resultado para obtener las propiedades nombreClave y anios
const {
  nombreClave,
  anios,
  lating: { lat, lng },
} = useContexts(persona);

// Impresión del valor de la propiedad nombreClave
console.log(nombreClave, anios);
console.log(lat, lng);
