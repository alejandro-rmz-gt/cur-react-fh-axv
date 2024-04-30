// Función asincrónica para obtener información sobre un personaje por su ID
async function getCharacterById(id) {
    try {
        // Hacer una solicitud GET a la API de Rick and Morty para obtener información sobre el personaje
        const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
        );
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
        throw new Error("No se pudo obtener información del personaje");
        }
        // Convertir la respuesta a formato JSON
        const characterData = await response.json();
        // Devolver los datos del personaje
        return characterData;
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error("Error al obtener información del personaje:", error);
        // Devolver null en caso de error
        return null;
    }
}

// Función principal asincrónica para obtener información sobre varios personajes
async function main() {
    // Obtener información sobre el personaje con ID 1
    const character1 = await getCharacterById(1);
    // Obtener información sobre el personaje con ID 2
    const character2 = await getCharacterById(2);

    // Imprimir información sobre los personajes
    console.log("Información sobre el personaje 1:", character1);
    console.log("Información sobre el personaje 2:", character2);
}

// Llamar a la función principal
main();
