import { useState } from "react";

// Importando el componente para agregar una nueva categoria
import { AgregarCategoria } from "./components/AgregarCategoria";

// Componente padre
export const GifExpertApp = () => {
    // lista de categorias
    const [categorias, setCategories] = useState(["One Punch", "Mob"]);

    // Funcion para agregar categoria
    const funcionAgregarCategoria = (nuevaCategoria) => {

        // Validar que los valores ingresados sean distintos
        if ( categorias.includes(nuevaCategoria)) return;

        // Agrega una nueva categoria
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
                {categorias.map((categoria) => {
                    return <li key={categoria}>{categoria}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    );
};
