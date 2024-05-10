import { useState } from "react";

// Importando el componente para agregar una nueva categoria
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";

// Componente padre
export const GifExpertApp = () => {
    // lista de categorias
    const [categorias, setCategories] = useState(["One Punch", "Mob"]);

    // Funcion para agregar categoria
    const funcionAgregarCategoria = (nuevaCategoria) => {

        // Validar que los valores ingresados sean distintos
        if (categorias.includes(nuevaCategoria)) return;

        // Agrega una nueva categoria
        setCategories([nuevaCategoria, ...categorias]);
    }

    return (
        <>
            <h1>Experto en GIFS</h1>

            <AgregarCategoria
                // setCategories= { setCategories }
                agregarNuevaCategoria={funcionAgregarCategoria}
            />

            {categorias.map((categoria) =>
                <GifGrid key={categoria} categoria={categoria} />
            )}
        </>
    );
};
