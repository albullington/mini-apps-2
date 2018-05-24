import React, { Component } from 'react';
import Account from './account';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'homepage',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      view: 'account',
    });
  }

  render() {
    if (this.state.view === 'homepage') {
      return (
        <div>
          <h4>Click below to checkout</h4>
          <button onClick={this.handleClick}>Checkout</button>
        </div>
      );
    }
    if (this.state.view === 'account') {
      return (
        <Account />
      );
    }
  }
}

export default App;
