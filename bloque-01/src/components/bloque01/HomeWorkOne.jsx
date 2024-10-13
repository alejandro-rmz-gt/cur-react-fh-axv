import React from "react";
import { useState } from "react";
// import PropTypes from "prop-types";

export const HomeWorkOne = ({ title, description }) => {
    console.log("El componente se redibujo")
  // Estado para el contador
  const [count, setCount] = useState(0);

  // Funcion para incrementar (mas uno)
  const incrementar = () => setCount(count + 1);

  // Funcion para decrementar (menos uno)
  const decrementar = () => setCount(count - 1);

  // Funcion para resetear el contador
  const resetCounter = () => setCount(0);

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>

      {/* Valor del contador */}
      <p>{count}</p>
      {/* Disparador del incremento */}
      <button onClick={incrementar}>Mas 1</button>
      {/* Disparador del decremento */}
      <button onClick={decrementar}>Menos 1</button>
      {/* Resetear contador */}
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};

// HomeWorkOne.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };
