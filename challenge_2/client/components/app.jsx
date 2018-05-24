import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'homepage',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      view: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h4>Click below to checkout</h4>
        <button onClick={this.handleClick}>Checkout</button>
      </div>
    )
  }
}

export default App;
