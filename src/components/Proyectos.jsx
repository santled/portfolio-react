import React from "react";

function Proyectos() {
  return (
    <section className="seccion" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        <div className="proyecto-card">
          <h3>Mi Portafolio</h3>
          <p>Desarrollado con React, incluye secciones de presentación, estudios y habilidades.</p>
        </div>
        <div className="proyecto-card">
          <h3>Sistema de Gestión de Estacionamiento</h3>
          <p>Desarrollado con JavaScript, incluye control de precio por tipo de vehículo y por tiempo, y control de identidad por patente</p>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;

