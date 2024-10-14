import { useState } from "react";

export const GiffExpertApp = () => {
  // Use state para las categorias
  const [categories, setCategories] = useState(["One punch man", "MHA"]);

  // Funcion para agregar un nuevo elemento a las categorias
  const addCategory = () => {
    // Usando spread
    setCategories(["Kaiyu 8", ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Giph Expert App</h1>

      {/* Input */}
      <button onClick={addCategory}>Agregar</button>

      {/* Listado de items (giphs) */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Giph Item */}
    </>
  );
};
