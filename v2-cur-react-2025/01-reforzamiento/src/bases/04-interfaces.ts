// interfaces: define los tipos de datos que debe de tener un objeto
interface Addreess {
    postalCode: string,
    city: string,
}

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    address: Addreess,
    opcional?: number,
}

// objeto literal
const ironman:Person = {
    firstName: "Tony",
    lastName: "Starck",
    age: 45,
    address: {
        postalCode: 'ABC677',
        city: 'New york',
    }
}

// objeto literal
const spiderman:Person = {
    firstName: "Andrew",
    lastName: "Garfield",
    age: 45,
    address: {
        postalCode: 'ABC677',
        city: 'New york',
    }
}

// ctrl + . = rellena de properties faltantes
const capitanAmerica: Person = {
    firstName: "Steve",
    lastName: "Rogers",
    age: 150,
    address: {
        postalCode: "Queeens",
        city: "New york",
    }
}

console.log(ironman);
console.log(spiderman);
console.log(capitanAmerica);