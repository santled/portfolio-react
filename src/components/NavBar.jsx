import React, { useState } from "react";
import "../styles/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Mi Portafolio</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#estudios">Estudios</a>
        <a href="#idiomas">Idiomas</a>
        <a href="#softskills">SoftSkills</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#footer">Contacto</a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;

