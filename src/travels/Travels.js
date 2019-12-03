import React from 'react';
import { Image, Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Japan from '../images/japan/day2/park2.jpg';
import './Travels.css';

export default function Travels() {
  return (
    <div className="travels-container">
      <Transition transitionOnMount duration={2000}>
        <Link to="/travels/japan" className="travels-item">
          <Image size="medium" src={Japan} className="img" />
          <div>Japan</div>
          <div className="subtitle">Two Week Itinerary</div>

          <div className="description">
            My experience from my two week trip around Japan in April 2019. All
            the places I visited, things I experienced and tips I learned during
            tha time.
          </div>
        </Link>
      </Transition>
    </div>
  );
}
