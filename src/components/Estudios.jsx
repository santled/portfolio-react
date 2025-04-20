import React from "react";

const estudios = [
  { institucion: "Escuela Técnica", titulo: "Técnico en Programación" },
  { institucion: "UTN FRT", titulo: "Ingeniería en Sistemas" }
];

function Estudios() {
  return (
    <div>
      <h2>Estudios</h2>
      <ul>
        {estudios.map((e, index) => (
          <li key={index}>
            <strong>{e.titulo}</strong> - {e.institucion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estudios;
