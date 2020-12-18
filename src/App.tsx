import React from 'react';
import logo from './logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Project to implement TWA
        </p>

        <p>
          Choose your life path:
        </p>

        <div className="actions-container">
          <button className="choose-button">STREET KID</button>
          <button className="choose-button">NOMAD</button>
          <button className="choose-button">CORPO</button>
        </div>
      </header>
    </div>
  );
}

export default App;
