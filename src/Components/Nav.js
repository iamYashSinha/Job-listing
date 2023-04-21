import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  color: '#fff',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '5px',
};

const activeStyle = {
  fontWeight: 'bold',
  borderBottom: '2px solid #fff',
};

export default function Nav() {
  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">
        Logo
      </Link>
      <ul style={{ display: 'flex', alignItems: 'center' }}>
      <ul>
          <NavLink
            style={linkStyle}
            activeStyle={activeStyle}
            to="/signin">
            SignIn
          </NavLink>
        </ul>
        <ul>
          <NavLink
            exact
            style={linkStyle}
            activeStyle={activeStyle}
            to="/"
          >
            Home
          </NavLink>
        </ul>
        <ul>
          <NavLink
            style={linkStyle}
            activeStyle={activeStyle}
            to="/Employee">
            Employee
          </NavLink>
        </ul>
        <ul>
          <NavLink
            style={linkStyle}
            activeStyle={activeStyle}
            to="/Employeer">
            Employeer
          </NavLink>
        </ul>
      </ul>
    </nav>
  );
}
