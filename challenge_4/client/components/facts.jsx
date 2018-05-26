import React from 'react';

const listStyle = {
  paddingBottom: '20px',
};

const Facts = ({ data }) => {
  const facts = data.map(fact => (
    <li style={listStyle} key={fact.category2 + fact.date + Math.random()}>
      {fact.description} {fact.date}
    </li>
  ));

  return (
    <div className="fact">
      <ul className="style">
        {facts}
      </ul>
    </div>
  );
};

export default Facts;
