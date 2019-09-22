import React from 'react';
import { Link } from 'react-router-dom';
import './UnderConstruction.css';

export default function UnderContrustction() {
  return (
    <>
      <div className="under-construction">
        <p>This page is not here yet...</p>
        <p><Link to="/">Go back to main page</Link></p>
      </div>
    </>
  )
}