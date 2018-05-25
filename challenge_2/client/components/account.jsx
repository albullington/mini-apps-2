import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Amanda',
      email: 'amanda@me.com',
      password: '123',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
          Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="email">
          Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="password">
          Password:
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <br />
          <Link to="/address"><button>Next</button></Link>
        </form>
      </div>
    );
  }
}

export default Account;
