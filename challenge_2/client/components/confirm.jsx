import React from 'react';
// import { Link } from 'react-router-dom';

const Confirm = ({ data, handleClick }) => {
  const {
    name,
    email,
    password,
    line1,
    line2,
    city,
    state,
    zipcode,
    creditcard,
    expirydate,
    cvv,
    billingzip,
  } = data;

  return (
    <div>
      <h4>Double check your data and click purchase</h4>
      <ul>Name: {name}</ul>
      <ul>Email: {email}</ul>
      <ul>Password: {password}</ul>
      <br />
      <ul>Address Line 1: {line1}</ul>
      <ul>Address Line 2: {line2}</ul>
      <ul>City: {city}</ul>
      <ul>State: {state}</ul>
      <ul>Zip Code: {zipcode}</ul>
      <br />
      <ul>Credit Card Number: {creditcard}</ul>
      <ul>Expiry Date: {expirydate}</ul>
      <ul>CVV: {cvv}</ul>
      <ul>Billing Zip Code: {billingzip}</ul>
      <button onClick={handleClick}>Purchase</button>
    </div>
  );
};

export default Confirm;
