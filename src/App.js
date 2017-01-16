import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './images/Petiole.jpg';
import img2 from './images/Pétiole.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <img src={img1} alt="Petiole" />
          <img src={img2} alt="Pétiole" />
        </p>
      </div>
    );
  }
}

export default App;
