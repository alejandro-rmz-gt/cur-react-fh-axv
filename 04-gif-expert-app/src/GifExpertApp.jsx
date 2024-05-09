import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = (newCategory) => {
    const [categories, setCategories] = useState(["One Punch", "Mob"]);

    const onAddCategory = (newCategory) => {
        console.log(newCategory)
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif expert app</h1>

            {/* Input */}
            <AddCategory
                // setCategories= { setCategories }
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gifs */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    );
};
