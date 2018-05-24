import React from 'react';
import { Link } from 'react-router-dom';

const Billing = () => (
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
      <br />
      <label htmlFor="billing-zip-code">
      Billing Zip Code:
        <input type="text" name="billing-zip-code" />
      </label>
      <br />
    </form>
    <Link to="/"><button>Purchase</button></Link>
  </div>
);


export default Billing;
