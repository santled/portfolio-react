import React from "react";
import Estudios from "./Estudios";
import SoftSkills from "./SoftSkills";
import Proyectos from "./Proyectos";
import Experiencia from "./Experiencia";
import Idiomas from "./Idiomas";

function Main() {
  return (
    <main>
      <section>
        <p>
          Soy [Tu Nombre], estudiante de Programación en la Facultad Regional Tucumán. Me interesa el desarrollo frontend y disfruto aprender tecnologías nuevas.
        </p>
      </section>

      <nav>
        <ul>
          <li><a href="#estudios">Estudios</a></li>
          <li><a href="#softskills">Soft Skills</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#idiomas">Idiomas</a></li>
        </ul>
      </nav>

      <section id="estudios">
        <Estudios />
      </section>

      <section id="softskills">
        <SoftSkills />
      </section>

      <section id="proyectos">
        <Proyectos />
      </section>

      <section id="experiencia">
        <Experiencia />
      </section>

      <section id="idiomas">
        <Idiomas />
      </section>
    </main>
  );
}

export default Main;
