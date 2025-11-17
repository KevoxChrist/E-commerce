import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">VISI</div>
      </Link>
      <nav className="nav-menu">
        <Link to="/contact" className="nav-item contact">CONTACT</Link>
        <Link to="/products" className="nav-item shop">SHOP</Link>
      </nav>
    </header>
  );
}

export default Header;