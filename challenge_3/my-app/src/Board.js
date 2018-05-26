import React, { Component } from 'react';
import Square from './Square.js';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      height: 10,
      width: 10,
      totalMines: 10,
      gameWon: false,
      minesPlanted: 0,
      rows: this.createGrid(),
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('this square was clicked', e.target);
  }

  renderSquare(x, y) {
    return <Square 
      key={`square-col${x}-row${y}`}
      isEmpty="false" 
      isBomb="false"
      numAdjacent="0"
      isShown="false"
      value={`square-col${x}-row${y}`}
      handleClick={this.handleClick}
      location={`-col${x}-row${y}`}
    />
  }

  createGrid() {
    let rows = [];
    for (let y = 1; y <= 10; y++) {
      const squares = [];
      for (let x = 1; x <= 10; x++) {
        squares.push(this.renderSquare(x, y));
      }
      rows.push(<tr id={"row"+y} key={y}>{squares}</tr>);
    }
    return rows;
  }

  render() {
    const {
      rows
    } = this.state;

    return (
      <table id="grid">
        <tbody id="grid-1">
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Board;
