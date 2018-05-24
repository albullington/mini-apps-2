import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import Account from './account';
import Address from './address';
import Billing from './billing';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/address">Address</Link></li>
        <li><Link to="/billing">Billing</Link></li>
      </ul>

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/address" component={Address} />
      <Route path="/billing" component={Billing} />
    </div>
  </Router>
);

export default App;
