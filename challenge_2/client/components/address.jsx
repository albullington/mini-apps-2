import React, { Component } from 'react';
import Billing from './billing';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'address',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      view: 'billing',
    });
  }

  render() {
    if (this.state.view === 'address') {
      return (
        <div>
          <form>
            <label htmlFor="line1">
            Address Line 1:
              <input type="text" name="line1" />
            </label>
            <br />
            <label htmlFor="line2">
            Address Line 2:
              <input type="text" name="line2" />
            </label>
            <br />
            <label htmlFor="city">
            City:
              <input type="text" name="city" />
            </label>
            <label htmlFor="state">
            State:
              <input type="text" name="state" />
            </label>
            <label htmlFor="zip-code">
            Zip Code:
              <input type="text" name="zip-code" />
            </label>
          </form>
          <button onClick={this.handleClick}>Next</button>
        </div>
      );
    }
    if (this.state.view === 'billing') {
      return (
        <Billing />
      );
    }
  }
}

export default Account;
