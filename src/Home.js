import React from 'react';
import { Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="home-title">
        <Transition transitionOnMount duration={2000}>
          <Link to="/projects" className="navigation-button">Projects</Link>
        </Transition>
        <Transition transitionOnMount duration={2000}>
          <Link to="/about" className="navigation-button">About</Link>
        </Transition>
        <Transition transitionOnMount duration={2000}>
          <Link to="/travels" className="navigation-button">Travels</Link>
        </Transition>  
      </header>
    </div>
  );
}
