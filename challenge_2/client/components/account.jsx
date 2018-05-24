import React, { Component } from 'react';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'account',
      name: '',
      email: '',
      password: '',
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
            <label>
            Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
            Email:
              <input type="text" name="email" />
            </label>
            <br />
            <label>
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
