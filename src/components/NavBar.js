import React from 'react';
import logo from '../logo.svg';

function NavBar(){
  return(
<div className="container">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="navbar-brand">Mejor Camada</div>
  <img src={logo} alt="logo" style={{ width: '35px' }} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <div className="nav-link">Home</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Acerca de nosotros</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Contáctanos</div>
      </li>
    </ul>
  </div>
</nav>
</div>
);
}

export default NavBar;