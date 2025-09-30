interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// type Owner = "DC" | "Marvel";

enum Owner {
  DC = "DC",
  Marvel = "Marvel",
}

const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: Owner.DC,
  },
  {
    id: 2,
    name: "Spiderman",
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: "Superman",
    owner: Owner.DC,
  },
  {
    id: 4,
    name: "Flash",
    owner: Owner.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: Owner.Marvel,
  },
];

console.log(heroes);
