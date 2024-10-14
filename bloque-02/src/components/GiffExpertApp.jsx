import { useState } from "react";

export const GiffExpertApp = () => {
  // Use state para las categorias
  const [categories, setCategories] = useState(["One punch man", "MHA"]);

  return (
    <>
      {/* Titulo */}
      <h1>Giph Expert App</h1>

      {/* Input */}

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
