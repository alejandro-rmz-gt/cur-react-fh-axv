// arreglo que solo es de numeros
const myArray:number[] = [1,2,3,4,5,6];
const mySecondArray:(string|number)[] = [45,'45'];

myArray.push(45);
console.log(myArray);
console.log(mySecondArray);

// Forma corta de un ciclo for
for (const myNumber of myArray) {
    console.log(myNumber + 45);
}