import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Account from './account';
import Address from './address';
import Billing from './billing';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/address" component={Address} />
      <Route path="/billing" component={Billing} />
    </div>
  </Router>
);

export default App;
