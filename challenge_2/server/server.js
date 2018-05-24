const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = 3001;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.post('/account', (req, res) => {
  res.sendStatus(201).send('account info posted');
});

app.patch('/address', (req, res) => {
  res.sendStatus(204).send('address info updated');
});

app.patch('/billing', (req, res) => {
  res.sendStatus(204).send('billing info updated');
});
