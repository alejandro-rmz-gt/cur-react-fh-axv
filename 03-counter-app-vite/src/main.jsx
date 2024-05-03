import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/assets/css/styles.css";
import { App } from "./components/App"

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App title={"Este es el titulo"} subTitle={45}/>
    </React.StrictMode>
);