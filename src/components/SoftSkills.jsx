import React from "react";

const habilidades = ["Comunicación", "Trabajo en equipo", "Resolución de problemas"];

function SoftSkills() {
  return (
    <div>
      <h2>Soft Skills</h2>
      <ul>
        {habilidades.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SoftSkills;
