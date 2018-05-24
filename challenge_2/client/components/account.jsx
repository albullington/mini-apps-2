import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => (
  <div>
    <form>
      <label htmlFor="name">
      Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label htmlFor="email">
      Email:
        <input type="text" name="email" />
      </label>
      <br />
      <label htmlFor="password">
      Password:
        <input type="text" name="password" />
      </label>
    </form>
    <Link to="/address"><button>Next</button></Link>
  </div>
);

export default Account;
