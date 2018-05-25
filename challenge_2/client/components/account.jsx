import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({ handleChange }) => (
  <div>
    <form>
      <label htmlFor="name">
      Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="email">
      Email:
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="password">
      Password:
        <input type="text" name="password" onChange={handleChange} />
      </label>
      <br />
      <Link to="/address"><button>Next</button></Link>
    </form>
  </div>
);

export default Account;
