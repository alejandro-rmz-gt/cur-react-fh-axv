import { useState } from "react";

// Importando el componente para agregar una nueva categoria
import { AgregarCategoria } from "./components/AgregarCategoria";

// Componente padre
export const GifExpertApp = (nuevaCategoria) => {
    // lista de categorias
    const [categorias, setCategories] = useState(["One Punch", "Mob"]);

    // Funcion para agregar categoria
    const funcionAgregarCategoria = (nuevaCategoria) => {
        setCategories([nuevaCategoria, ...categorias]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>Experto en GIFS</h1>

            {/* Input */}
            <AgregarCategoria
                // setCategories= { setCategories }
                agregarNuevaCategoria={funcionAgregarCategoria}
            />

            {/* Listado de Gifs */}
            <ol>
                {categorias.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    );
};
