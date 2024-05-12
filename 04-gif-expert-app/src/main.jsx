// Importa React del paquete 'react' y ReactDOM de 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa el componente GifExpertApp desde './GifExpertApp'
import { GifExpertApp } from './GifExpertApp';

// Importa los estilos CSS desde './assets/css/styles.css'
import './assets/css/styles.css';

// Utiliza ReactDOM.createRoot para renderizar el componente GifExpertApp dentro del elemento con el ID 'root' en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Inicia el modo estricto de React
  <React.StrictMode>
    {/* Renderiza el componente GifExpertApp dentro del modo estricto */}
    <GifExpertApp />
  </React.StrictMode>,
)

//4rExYT45XLVkSnDjpG0a2Nvr2vhjWGev
