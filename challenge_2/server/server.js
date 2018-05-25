const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = 3001;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.post('/confirm', (req, res) => {
  console.log(req.body, 'this is data received by server');
  res.send('account info posted');
});
