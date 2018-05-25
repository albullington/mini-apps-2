import React from 'react';
import { Link } from 'react-router-dom';

const Billing = ({ handleChange }) => (
  <div>
    <form>
      <label htmlFor="creditcard">
      Credit Card Number:
        <input type="text" name="creditcard" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="expirydate">
      Expiry Date:
        <input type="text" name="expirydate" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="cvv">
      CVV:
        <input type="text" name="cvv" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="billingzip">
      Billing Zip Code:
        <input type="text" name="billingzip" onChange={handleChange} />
      </label>
      <br />
    </form>
    <Link to="/confirm"><button>Next</button></Link>
  </div>
);


export default Billing;
