import React from "react";

export const FirstComponent = ({ title, description }) => {
  /* Espacio de funciones */
  const funcionHolaMundo = () => {
    return "Impresion de un mensaje de una funcion";
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{funcionHolaMundo()}</p>
    </>
  );
};
