import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <p className="App-intro">
          Play by finding all the squares without bombs! 
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
