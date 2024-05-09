import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Mob"]);

    console.log(categories);

    return (
        <>
            {/* Titulo */}
            <h1>Gif expert app</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <ol>
                {categories.map(category => {
                    return <li key={ category }>{ category }</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
    );
};
