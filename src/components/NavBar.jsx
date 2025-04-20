// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MiPortafolio</h1>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobremi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
