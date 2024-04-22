// Funciones

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};
console.log(saludar("Nombre 1"));

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
console.log(saludar2("Nombre 2"));

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3("Nombre 3"));

const getUser = () => ({
  uid: "4545GHJHJ",
  username: "ElUser",
});

const user = getUser();
console.log(user);

// Tarea
// Esto es un objeto implicito
const getUsuarioActivo = (nombre) => ({
  uid: "G45HJKHH",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
