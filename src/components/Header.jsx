// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="logo.png" alt="IPI Logo" className="logo" />
        <h1 className="site-title">Indian Plastics Institute DTU Chapter</h1>
      </div>
    </header>
  );
}

export default Header;