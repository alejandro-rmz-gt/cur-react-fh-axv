import { useEffect, useState } from "react"; // Importa las funciones useEffect y useState desde React
import { getGifs } from "../helpers/getGifs"; // Importa la función getGifs desde su archivo correspondiente

// Define el componente GifGrid
export const GifGrid = ({ categoria }) => {
    // Declara el estado para el contador
    const [counter, setCounter] = useState(10);

    // Efecto secundario que se ejecuta cuando cambia la categoría
    useEffect(() => {
        // Llama a la función getGifs para obtener los GIFs de la categoría actual
        getGifs(categoria);
    }, [categoria]); // Se ejecuta el efecto cada vez que cambia la categoría

    return (
        <> {/* Retorna un fragmento que contiene elementos JSX */}
            <h3>{categoria}</h3> {/* Título de la categoría */}
            <h5>{counter}</h5> {/* Valor del contador */}
            <button onClick={() => setCounter(counter + 1)}>+1</button> {/* Botón para incrementar el contador */}
        </>
    );
}
