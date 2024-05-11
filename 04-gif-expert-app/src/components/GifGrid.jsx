import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoria }) => {

    getGifs(categoria);

    return (
        <>
            <h3>{ categoria }</h3>
            <p>Hola trabajo gracias a Dios</p>
        </>
    );
}
