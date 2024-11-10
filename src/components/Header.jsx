import React from 'react';
import Navigate from './Navigate';

export default function Header() {
  return (
    <header>
      <h1>Birdwatching</h1>
      <div className="logo">
        <img src="/images/dove.png" alt="bird icon" className="bird-icon" />
      </div>
      <Navigate />
    </header>
  );
}


