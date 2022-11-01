const express = require('express');
var bodyParser = require('body-parser');
var hash = require('object-hash');
const app = express();

const port = process.env.PORT || 8000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Home Page, Block Explorer!',
    version: '1.0.0',
  });
});

app.post('/validate_pix', (req, res) => {
  console.log(req.body);
  var e2e_id = req.body['e2e_id'];
  var pix_value = req.body['pix_value'];
  var pix_key = req.body['pix_key'];
  
  if([e2e_id,pix_value,pix_key].some(el => el === (undefined || ""))){
    res.status(404).send({
      message: "The parameter e2e_id, pix_value, pix_key must be passed!" 
    });
  }
  
  var pix_hash = hash(req.body)

  res.status(201).send({
    message: pix_hash  
  });
});

app.listen(port);