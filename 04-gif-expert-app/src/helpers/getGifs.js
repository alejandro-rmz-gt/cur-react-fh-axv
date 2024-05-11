export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4rExYT45XLVkSnDjpG0a2Nvr2vhjWGev&q=${ categoria }&limit=20`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}