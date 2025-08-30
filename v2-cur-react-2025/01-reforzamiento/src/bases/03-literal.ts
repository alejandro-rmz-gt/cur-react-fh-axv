// objeto literal
const person = {
    firstName: "Alejandro",
    lastName: "Hernandez",
    age: 25,
    address: {
        postal: 'ABBSS',
        city: 'New york',
    }
}

person.firstName = 'Alejandro';
person.lastName = 'Perez';

console.log('persona original:', person);

// Se rompe la relacion y las variables ahora son independientes
// pero a primer nivel
// los objetos internos, no son afectados
// const persona2 = {...person};


// strucureClone es una funcion especial de ts
const persona2 = structuredClone(person);

persona2.lastName = 'Diferente';
persona2.address.city = 'Diferente ciudad';

console.log('persona 2:', persona2);

