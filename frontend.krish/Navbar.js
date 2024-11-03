import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Artify Marketplace</h1>
      <div className="nav-links">
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;