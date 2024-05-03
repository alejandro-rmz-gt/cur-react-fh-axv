import React from 'react';
import { FirstApp } from './components/FirstApp';
import { CounterApp } from './components/CounterApp';

export const App = () => {
    return (
        <>
            <FirstApp />
            <CounterApp contador={55}/>
        </>
    )
}