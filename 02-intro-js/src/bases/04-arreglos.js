// Arreglos
// const arreglo = new Array( 100 );

const arreglo = [1, 2, 3, 4, 5];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// Operador spread ...

// Clon del arreglo usando el operador spread {...}
let arreglo2 = [...arreglo, 5];
// arreglo.push( 5 );

// Call Back
const arreglo3 = arreglo2.map(function(numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

// Cuando una funcion no tiene un return explicito, esta retornara un undefined
