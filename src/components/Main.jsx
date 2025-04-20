import React from "react";
import "../styles/Main.css";
import Estudios from "./Estudios";
import Idiomas from "./Idiomas";
import SoftSkills from "./SoftSkills";
import Experiencia from "./Experiencia";
import Proyectos from "./Proyectos";

function Main() {
  return (
    <main>
      <Estudios />
      <Idiomas />
      <SoftSkills />
      <Experiencia />
      <Proyectos />
    </main>
  );
}

export default Main;

