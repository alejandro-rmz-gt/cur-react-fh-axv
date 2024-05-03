import React from 'react';
import { FirstApp } from './FirstApp';
import PropTypes from 'prop-types';

export const App = ({title, subTitle}) => {
    return (
        <>
            <h1>{ title }</h1>
            <strong>{ subTitle }</strong>
            <FirstApp />
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

App.defaultProps = {
    title: 'Por defecto',
    subTitle: 'Por defecto'
}
