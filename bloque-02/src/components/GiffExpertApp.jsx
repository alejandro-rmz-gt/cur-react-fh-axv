import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GiffExpertApp = () => {
  const [categories, setCategories] = useState(["One punch man", "MHA"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Giph Expert App</h1>

      <AddCategory onNewCategory={addCategory} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
