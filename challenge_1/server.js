const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello, client'));

const port = 1337;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

