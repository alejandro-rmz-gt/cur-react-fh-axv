import React from "react";
import { FirstComponent } from "./bloque01/FirstComponent";
import { PropComponent } from "./bloque01/PropComponent";
import { HomeWorkOne } from "./bloque01/HomeWorkOne";

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

      <HomeWorkOne
        title="Tarea"
        description="Realizar un contador de numero, que incremente un numero y tambien lo decremente"
      />
    </>
  );
};
