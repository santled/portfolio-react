import React from "react";

function Proyectos() {
  return (
    <section className="seccion" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        <div className="proyecto-card">
          <h3>Mi Portafolio</h3>
          <p>React + CSS. Un sitio responsive para mostrar mi trabajo y experiencia.</p>
        </div>
        <div className="proyecto-card">
          <h3>Clon de Google</h3>
          <p>Simulación de búsqueda usando React y una API falsa.</p>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;

