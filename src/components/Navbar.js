import React from 'react';
import { Link } from 'react-router-dom';
import React, {useState} from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className="nav-bar container">
          <Link to="/" className="navbar-logo">
            TRVL<i className='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </div>
  );
}

