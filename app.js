const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Home Page, Block Explorer!',
    version: '1.0.0',
  });
});

app.listen(port);