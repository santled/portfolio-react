import React from "react";
import "./../styles/Header.css"; // si vas a usar CSS separado
// import perfil from "./../assets/foto-perfil.jpg"; // 

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div>
          <h1>Nombre Apellido</h1>
          <h2>Estudiante de Programación | Desarrollador Frontend</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;


