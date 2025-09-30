const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { name, age, key } = person;

// const name = person.name;
// const age = person.age;

console.log({ name, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const { keyName, rank = "Sin rango", user } = useContext(person);
console.log({ keyName, rank, name, age });
