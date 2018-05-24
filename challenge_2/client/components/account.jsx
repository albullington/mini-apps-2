import React, { Component } from 'react';
import Address from './address';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'account',
    };
  }

  handleClick() {
    this.setState({
      view: 'address',
    });
  }

  render() {
    if (this.state.view === 'account') {
      return (
        <div>
          <form>
            <label htmlFor="name">
            Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label htmlFor="email">
            Email:
              <input type="text" name="email" />
            </label>
            <br />
            <label htmlFor="password">
            Password:
              <input type="text" name="password" />
            </label>
          </form>
          <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
    if (this.state.view === 'address') {
      return (
        <Address />
      );
    }
  }
}

export default Account;
