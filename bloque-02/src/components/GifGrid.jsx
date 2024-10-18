import React from 'react';
import { getCharacters } from '../helpers/getCharacters.js';

export const GifGrid = ({ category }) => {
    getCharacters(category);

    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
        </>
    );
};
