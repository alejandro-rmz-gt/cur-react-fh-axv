import React from "react";

export const App = ({ title='valor null' }) => {
  /* Espacio de funciones */
  const holoMundo = () => {
    return "hola mundo";
  };

  return (
    <>
      <div className="container">
        <h1>Bloque 01</h1>

        <p>{holoMundo()}</p>

        <p>{title}</p>
      </div>
    </>
  );
};
