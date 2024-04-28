//----------------
// Funciones en JS
//----------------

// Funcion comun (No recomendada)
//-------------------------------
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

// Usando funcion comun saludar
console.log(saludar("Nombre 1"));

//Funciones de flecha =>
//----------------------
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// Usando funcion de flecha
console.log(saludar2("Nombre 2"));

// Misma funcion de flecha pero mas ligera
//----------------------------------------
const saludar3 = (nombre) => `Hola, ${nombre}`;

// Usando funcion ligera
console.log(saludar3("Nombre 3"));

// Funcion aun mas resumida
//-------------------------
const saludar4 = () => "Hola devs";

// Usando funcion resumida
console.log(saludar4());

// Funcion de flecha que no recibe ningun argumento
const getUser = () => ({
  uid: "4545GHJHJ",
  username: "ElUser",
});

const user = getUser();
console.log(user);

// Tarea
// Esto es una funcion de flecha
// Esto es un objeto implicito
// Prueba de la funcion con un console.log
const getUsuarioActivo = (nombre) => ({
  uid: "G45HJKHH",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
