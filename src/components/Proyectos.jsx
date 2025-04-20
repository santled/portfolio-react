import React from "react";

const proyectos = [
  { nombre: "Portfolio Personal", descripcion: "Sitio web en React con info personal." },
  { nombre: "App de Tareas", descripcion: "Gestor de tareas con React y localStorage." }
];

function Proyectos() {
  return (
    <div>
      <h2>Proyectos Realizados</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <strong>{proyecto.nombre}</strong>: {proyecto.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
