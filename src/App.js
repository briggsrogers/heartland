import React from 'react';

import Gallery from './Gallery';
import Hero from './Hero';
import Type from './Type';
import LocationSlate from './LocationSlate';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Type />
      <LocationSlate />
      <Type />
      <Gallery />
      <Type />
    </div>
  );
}

export default App;
