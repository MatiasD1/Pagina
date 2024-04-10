import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ isVisible }) => {
  return (
    <nav className={`NavBar ${isVisible ? 'fixed' : ''}`}>
      <h2>Puerto Bueno</h2>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/departamentos" className="nav-link">Departamentos</Link>
        </li>
        <li className="nav-item">
          <Link to="/ubicacion" className="nav-link">Ubicación</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
