import logo from './logo.png';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
  return (

    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)' }}>
        <img src={logo} className="App-logo" alt="logo with letter c and letter d" />

      <title class="App-header">Clear Docs</title>
      <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', margin: 0, padding: 0 }}>
        <li class={{ marginLeft: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>Home</Link>
        </li>
        <li style={{ marginLeft: '1rem' }}>
          <Link to="/about" style={{ textDecoration: 'none', color: '#000000' }}>About</Link>
        </li>
        <li style={{ marginLeft: '1rem' }}>
          <Link to="/image-pdf-ocr" style={{ textDecoration: 'none', color: '#000000' }}>Get Started</Link>
        </li>
    
  
      </ul>
    </nav>
  );
}
export default Header;