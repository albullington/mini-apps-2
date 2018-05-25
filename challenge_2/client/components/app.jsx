import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Account from './account';
import Address from './address';
import Billing from './billing';
import Confirm from './confirm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Amanda',
      email: 'amanda@me.com',
      password: '123',
      line1: '146 Wayward Street',
      line2: '',
      city: 'San Francisco',
      state: 'CA',
      zipcode: 94105,
      creditcard: null, 
      expirydate: '12/19',
      cvv: 123,
      billingzip: 94105,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const data = this.state;
    this.submitData(data);
  }

  submitData(data) {
    fetch('http://localhost:3001/confirm', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res, 'response on client account page');
    }).catch((err) => {
      throw err;
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/account" render={() => <Account handleChange={this.handleChange} />} />
          <Route path="/address" render={() => <Address handleChange={this.handleChange} />} />
          <Route path="/billing" render={() => <Billing handleChange={this.handleChange} />} />
          <Route path="/confirm" render={() => <Confirm data={this.state} handleClick={this.handleClick} />} />
        </div>
      </Router>
    );
  }
}

export default App;
