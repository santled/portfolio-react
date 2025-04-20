import React, { useState } from "react";
import "../styles/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      
     <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#estudios" className="nav-btn">Estudios</a>
        <a href="#idiomas" className="nav-btn">Idiomas</a>
        <a href="#softskills" className="nav-btn">SoftSkills</a>
        <a href="#experiencia" className="nav-btn">Experiencia</a>
        <a href="#proyectos" className="nav-btn">Proyectos</a>
        <a href="#footer" className="nav-btn">Contacto</a>
      </div>
      <div className="burger" onClick={toggleMenu}>☰</div>
    </nav>
  );
}

export default Navbar;


