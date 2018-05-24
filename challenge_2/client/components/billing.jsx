import React, { Component } from 'react';
import App from './app';

class Billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'billing',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      view: 'homepage',
    });
  }

  render() {
    if (this.state.view === 'billing') {
      return (
        <div>
          <form>
            <label htmlFor="credit-card-number">
            Credit Card Number:
              <input type="text" name="credit-card-number" />
            </label>
            <br />
            <label htmlFor="expiry-date">
            Expiry Date:
              <input type="text" name="expiry-date" />
            </label>
            <br />
            <label htmlFor="cvv">
            CVV:
              <input type="text" name="cvv" />
            </label>
            <label htmlFor="billing-zip-code">
            Billing Zip Code:
              <input type="text" name="billing-zip-code" />
            </label>
          </form>
          <button onClick={this.handleClick}>Purchase</button>
        </div>
      );
    }
    if (this.state.view === 'homepage') {
      return (
        <App />
      );
    }
  }
}

export default Billing;
