import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({ handleChange }) => (
  <div>
    <form>
      <label htmlFor="line1">
      Address Line 1:
        <input type="text" name="line1" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="line2">
      Address Line 2:
        <input type="text" name="line2" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="city">
      City:
        <input type="text" name="city" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="state">
      State:
        <input type="text" name="state" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="zip-code">
      Zip Code:
        <input type="text" name="zipcode" onChange={handleChange} />
      </label>
      <br />
      <Link to="/billing"><button>Next</button></Link>
    </form>
  </div>
);

export default Account;
