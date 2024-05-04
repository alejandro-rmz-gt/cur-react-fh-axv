import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = () => {

    {/* Estado del valor */ }
    const [contador, setContador] = useState(0);

    {/* Funcion que se manda a llamar con en boton para Aumentar */ }

    const handleAdd = () => {
        setContador(contador + 1);
    };

    {/* Funcion que se manda a llamar con el boton para Decrementar */ }

    const handreDecrement = () => {
        setContador(contador -1)
    }

    {/* Funcion que se manda a llamar para Receteat */}

    const handleRecet = () => {
        setContador(0)
    }

    {/* Retorno del componente */ }

    return (

        <div className='container'>

            <h2>CounterApp</h2>

            <strong>{contador}</strong>

            <div className='containerButtons'>
                <button onClick={handleAdd}>+ 1</button>
                <button onClick={handreDecrement}> - 1 </button>
                <button onClick={handleRecet}> Recet </button>
            </div>

        </div>

    );
};

CounterApp.propTypes = {
    contadorInicial: PropTypes.number,
};
