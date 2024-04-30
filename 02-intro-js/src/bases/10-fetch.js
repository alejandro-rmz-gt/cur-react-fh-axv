const peticion = "https://rickandmortyapi.com/api/character/";

fetch(peticion)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })