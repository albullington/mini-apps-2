import React from 'react';

const Square = ({ value, handleClick, location }) => (
  <td id={"square" + location} onClick={handleClick}>I'm a square</td>
);

export default Square;
