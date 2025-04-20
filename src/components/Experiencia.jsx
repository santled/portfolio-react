import React from "react";

const experiencia = [
  { empresa: "Freelance", puesto: "Desarrollador Web", año: "2023 - Presente" },
  { empresa: "Prácticas UTN", puesto: "Asistente de Programación", año: "2022" }
];

function Experiencia() {
  return (
    <div>
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiencia.map((exp, index) => (
          <li key={index}>
            <strong>{exp.puesto}</strong> en {exp.empresa} ({exp.año})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experiencia;
