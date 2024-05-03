import React from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ contador }) => {
    return (
        <>
            <h2>CounterApp</h2>
            <strong>{contador}</strong>
        </>
    )
}

CounterApp.propTypes = {
    contador: PropTypes.number.isRequired,
}