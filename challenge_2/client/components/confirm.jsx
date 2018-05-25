import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Confirm extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      name,
      email,
      password,
    } = this.state;

    const data = {
      n: name,
      e: email,
      p: password,
    };

    fetch('http://localhost:3001/confirm', {
      method: 'POST',
      body: data,
    }).then((res) => {
      console.log(res, 'response on client account page');
    }).catch((err) => {
      throw err;
    });
  }

  render() {
    return (
      <div>
        <h4>Double check your data and click purchase</h4>
        {/* {name}
        {email}
        {password} */}
        <button>Purchase</button>
      </div>
    );
  }
}

export default Confirm;
