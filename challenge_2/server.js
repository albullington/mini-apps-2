const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendStatus(200).send('Hello world');
})

const port = 3001;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));