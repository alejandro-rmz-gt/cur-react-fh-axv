import React from "react";
import { FirstComponent } from "./bloque01/FirstComponent";

export const App = () => {
  return (
    <>
      <h1>Bloque 01</h1>

      <FirstComponent
        title="Primer componente"
        description="Descripcion del componente"
      />

      <hr />
    </>
  );
};
