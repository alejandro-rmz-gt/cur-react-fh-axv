const characteresName = ["goku", "vegueta", "Trunks"];

// const [personaje1, personaje2, p3] = characteresName;

// console.log({ personaje1, personaje2, p3 });

const [, , p3] = characteresName;

console.log({ p3 });

const returnsArrayFn = () => {
  return ["ABC", 22] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log({ letters, numbers });

// TAREA --------
const useState = (value: string) => {
  return [
    value,
    (updateValue: string) => {
      value = updateValue;
      console.log(value);
    },
  ] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Alejandro");
