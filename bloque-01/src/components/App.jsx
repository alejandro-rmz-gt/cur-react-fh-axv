import React from "react";
import { FirstComponent } from "./bloque01/FirstComponent";
import { PropComponent } from "./bloque01/PropComponent";

export const App = () => {
  return (
    <>
      <h1>Bloque 01</h1>

      <FirstComponent
        title="Primer componente"
        description="Descripcion del componente"
      />

      <hr />

      <PropComponent
        title="Prop Types"
        description="Prop Types es una herramienta para validar los tipos de propiedades de un componente en react"
      />

      <hr />
    </>
  );
};
