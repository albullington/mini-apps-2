import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h4>Click below to checkout</h4>
    <Link to="/account"><button>Checkout</button></Link>
  </div>
);


export default Home;
