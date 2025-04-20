import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="social-buttons">
        <a
          href="https://www.linkedin.com/in/santiago-esteban-ledesma-a661b32a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-social linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/santled"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-social github"
        >
          GitHub
        </a>
      </div>
      <p>© 2025 Juan Pérez. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;


