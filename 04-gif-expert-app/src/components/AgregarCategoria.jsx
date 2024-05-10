import { useState } from "react"

// Componente
export const AgregarCategoria = ( { agregarNuevaCategoria } ) => {

    // Use State
    const [valorInput, setInputValue] = useState('')

    // Al haber cambios en el input se dispara esta funcion
    const alEscribir = ({ target }) => {
        // Cambia el estado del input
        setInputValue(target.value)
    }

    // Al enviar
    const alEnviar = (event) => {
        // Evitar el comportamiento predeterminado
        event.preventDefault()

        // Condicion para evitar contenido vacio
        if( valorInput.trim().length <= 1) return;

        // Agregar una nueva categoria
        agregarNuevaCategoria( valorInput.trim() );

        // Vacia el contenido del input
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ alEnviar }>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={valorInput}
                    onChange={alEscribir}
                />
            </form>
        </>
    )
}
