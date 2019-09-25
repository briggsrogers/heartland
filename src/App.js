import React from 'react';

import Gallery from './Gallery';
import Hero from './Hero';
import Type from './Type';
import Navigator from './Navigator';
import LocationSlate from './LocationSlate';
import Shim from './Shim';

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
      <Navigator />
      <Shim/>
      <Type />
    </div>
  );
}

export default App;
