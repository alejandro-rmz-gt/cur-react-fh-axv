import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoria }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{categoria}</h3>

            <ol>
                {
                    images.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    );
}
