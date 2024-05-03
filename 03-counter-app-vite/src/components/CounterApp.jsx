import React from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ contador }) => {
    return (
        <>
            <div className='container'>
                <h2>CounterApp</h2>
                <strong> {contador} </strong>
                <button> + 1</button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    contador: PropTypes.number.isRequired,
}