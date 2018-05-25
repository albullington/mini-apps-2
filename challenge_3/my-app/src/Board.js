import React, { Component } from 'react';
import Square from './Square.js';

class Board extends Component {

  render() {
    let rows = [];
    for (let y = 0; y < 10; y++) {
      const squares = [];
      for (let x = 0; x < 10; x++) {
        squares.push(<Square key={`square-col${x}-row${y}`} value={`square-col${x}-row${y}`}/>);
      }
      rows.push(<tr key={y}>{squares}</tr>);
    }
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
