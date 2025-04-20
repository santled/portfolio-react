import React from "react";

const idiomas = ["Español (nativo)", "Inglés (intermedio)"];

function Idiomas() {
  return (
    <div>
      <h2>Idiomas</h2>
      <ul>
        {idiomas.map((idioma, index) => (
          <li key={index}>{idioma}</li>
        ))}
      </ul>
    </div>
  );
}

export default Idiomas;
