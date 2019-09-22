import React from 'react';
import { Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="nav-header">
      <Transition transitionOnMount duration={2000}>
        <Link to="/" className="nav-header-item">
          Home
        </Link>
      </Transition>
      <div className="nav-links">
        <Transition transitionOnMount duration={2000}>
          <Link to="/projects" className="nav-header-item">
            Projects
          </Link>
        </Transition>
        <Transition transitionOnMount duration={2000}>
          <Link to="/travels" className="nav-header-item">
            Travels
          </Link>
        </Transition>
        <Transition transitionOnMount duration={2000}>
          <Link to="/about" className="nav-header-item">
            About
          </Link>
        </Transition>
      </div>
    </div>
  );
}
