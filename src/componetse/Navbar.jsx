import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar">
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/donate">Donate</Link></li>
          <li className="nav-item"><Link to="/tnx">Tnx</Link></li>
        </ul>
      </div>
    );
  }
}
