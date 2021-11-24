import React from 'react';
import swImg from '../img/sw-logo.png';
import '../App.css';

function Header() {
  return (
    <div className="App-header">
      <img alt="Logo do filme Star Wars" src={ swImg } className="logo-img" />
      <h2 className="fade-in-text">Planets Search</h2>
    </div>
  );
}

export default Header;
