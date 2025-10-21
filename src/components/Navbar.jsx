// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {/* Add other links as needed */}
        <li><a href="/#team">Our Team</a></li>
        <li><a href="/#report">Annual Report</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
