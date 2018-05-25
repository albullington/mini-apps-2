const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('../database/db');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = 3001;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.post('/confirm', (req, res) => {
  const data = req.body.body;
  knex('users').insert([{
    name: data.name,
    email: data.email,
    password: data.password,
  }]);
  knex('addresses').insert([{
    line1: data.line1,
    line2: data.line2,
    city: data.city,
    state: data.state,
    zipcode: data.zipcode,
  }]);
  knex('payments').insert([{
    creditcard: data.creditcard,
    expirydate: data.expirydate,
    cvv: data.cvv,
    billingzip: data.billingzip,
  }]);
  res.send('data inserted into database');
});
