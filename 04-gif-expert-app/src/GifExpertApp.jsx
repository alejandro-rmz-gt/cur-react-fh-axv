import { useState } from "react"; // Importa la función useState desde React

// Importa los componentes AgregarCategoria y GifGrid desde sus archivos correspondientes
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";

// Define el componente principal de la aplicación
export const GifExpertApp = () => {
    // Declara un estado llamado categorias usando el hook useState, inicializado con una sola categoría: "One Punch"
    const [categorias, setCategories] = useState(["One Punch"]);

    // Define una función llamada funcionAgregarCategoria que toma una nueva categoría como argumento
    const funcionAgregarCategoria = (nuevaCategoria) => {

        // Verifica si la nueva categoría ya está en la lista de categorías
        if (categorias.includes(nuevaCategoria)) return; // Si lo está, no hace nada

        // Agrega la nueva categoría al inicio de la lista utilizando el método setCategories
        setCategories([nuevaCategoria, ...categorias]);
    }

    return (
        <> {/* Retorna un fragmento que contiene varios elementos */}
            <h1>Experto en GIFS</h1> {/* Encabezado de la aplicación */}

            {/* Componente AgregarCategoria, recibe la función funcionAgregarCategoria como una propiedad llamada agregarNuevaCategoria */}
            <AgregarCategoria
                agregarNuevaCategoria={funcionAgregarCategoria}
            />

            {/* Itera sobre la lista de categorías y renderiza un componente GifGrid para cada categoría */}
            {categorias.map((categoria) =>
                <GifGrid key={categoria} categoria={categoria} /> // Cada GifGrid recibe una key única y la categoría correspondiente como propiedades
            )}
        </>
    );
};
