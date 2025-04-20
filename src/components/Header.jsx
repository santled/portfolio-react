import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="seccion">
        <div className="profile">
          <img
            src="/Assets/Images/Mi_foto.jpg"
            alt="Foto de perfil"
            className="profile-image"
          />
          <div className="profile-text">
            <h1>LEDESMA SANTIAGO</h1>
            <p>Estudiante de Programación</p>
            <div className="about-me">
            <h2 className="subtitulo">Sobre mí</h2>
              <p>
                Soy una persona apasionada por el desarrollo de software, con ganas de seguir aprendiendo y creciendo en el mundo de la tecnología.
                Actualmente me encuentro estudiando programación en la UTN y desarrollando proyectos personales para mejorar mis habilidades.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


