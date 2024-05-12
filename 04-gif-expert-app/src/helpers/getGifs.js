// Define una función asincrónica llamada getGifs que recibe una categoría como parámetro
export const getGifs = async(categoria) => {
    // Construye la URL de la API de Giphy utilizando la categoría proporcionada
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4rExYT45XLVkSnDjpG0a2Nvr2vhjWGev&q=${categoria}&limit=10`;

    // Realiza una solicitud fetch a la URL y espera la respuesta
    const respuesta = await fetch(url);

    // Extrae los datos JSON de la respuesta
    const { data } = await respuesta.json();

    // Mapea los datos para extraer la información necesaria de cada imagen y crea un nuevo array de objetos GIF
    const gifs = data.map(img => ({
        id: img.id, // ID de la imagen
        title: img.title, // Título de la imagen
        url: img.images.downsized_medium.url // URL de la imagen en tamaño mediano
    }));

    // Imprime los GIFs en la consola
    console.log(gifs);

    // Retorna el array de objetos GIF
    return gifs;
}
