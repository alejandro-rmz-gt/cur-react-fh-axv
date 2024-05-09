import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Mob"]);

    const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ])
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>Gif expert app</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={ category }>{ category }</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
    );
};
