import React from 'react';

const objeto = {
    nombre: 'Alejandro',
    parrafo: 'Esto es un parrafo'
}

const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = () => {
    return (
        <>
            <h3>{getResult(4, 88)}</h3>
            <p>{objeto.parrafo}</p>
        </>
    )
}