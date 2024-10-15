import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GiffExpertApp = () => {
  // Use state para las categorias
  const [categories, setCategories] = useState(["One punch man", "MHA"]);

  // Funcion para agregar un nuevo elemento a las categorias
  const addCategory = ( newCategory ) => {
    // Usando spread
    // setCategories(["Kaiyu 8", ...categories]);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Giph Expert App</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={addCategory}
      />

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
