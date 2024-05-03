import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = () => {

    {/* Estado del valor */ }
    const [contador, setContador] = useState(0);

    {/* Funcion que se manda a llamar con en boton para aumentar */ }
    const handleAdd = () => {
        setContador(contador + 1);
    };

    {/* Funcion que se manda a llamar con el boton para recetear */ }
    const handleRecet = () => {
        setContador(0)
    }

    {/* Retorno del componente */ }
    return (

        <div className='container'>

            <h2>CounterApp</h2>

            <strong>{contador}</strong>

            <div className='containerButtons'>
                <button onClick={handleAdd}>Aument</button>
                <button onClick={handleRecet}> Recet </button>
            </div>

        </div>

    );
};

CounterApp.propTypes = {
    contadorInicial: PropTypes.number,
};
