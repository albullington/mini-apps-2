import React, { Component } from 'react';
import Square from './Square.js';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      gameWon: false,
      minesPlanted: 0,
      rows: this.createGrid(),
    }
  }

  createGrid() {
    let rows = [];
    for (let y = 0; y < 10; y++) {
      const squares = [];
      for (let x = 0; x < 10; x++) {
        squares.push(<Square 
          key={`square-col${x}-row${y}`}
          isEmpty="false" 
          isBomb="false"
          numAdjacent="0"
          isShown="false"
          value={`square-col${x}-row${y}`}
        />);
      }
      rows.push(<tr key={y}>{squares}</tr>);
    }
    return rows;
  }

  render() {
    const {
      rows
    } = this.state;

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Board;
