import React from 'react';
import { Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Travels.css';

export default function Travels() {
  return (
    <div className="travels-container">
      <Transition transitionOnMount duration={2000}>
        <Link to="/travels/japan" className="travels-item">
          Japan
        </Link>
      </Transition>
      <Transition transitionOnMount duration={2000}>
        <div className="travels-item">Cuba</div>
      </Transition>
    </div>
  );
}
