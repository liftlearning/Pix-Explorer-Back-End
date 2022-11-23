const express = require('express');
const cors = require('cors')
const { api_pix } = require('./mock_pix_api.js');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Home Page, Block Explorer!',
    version: '1.0.0',
  });
});

// Pix validation route
app.post('/validate_pix', (req, res) => { 
  // check if any parameter is undefined or empty
  var e2e_id = req.body['e2e_id'];
  var pix_value = req.body['pix_value'];
  var pix_key = req.body['pix_key'];

  if([e2e_id,pix_value,pix_key].some(el => (el === (undefined || null) || el === ("")))){
    res.status(404).send({
      message: "The parameters e2e_id, pix_value, pix_key must be passed!" 
    });
  }

  // pix_value = 50 and pix_value = "50" generates different hashes
  // string cast to treat these cases
  var casted_json = {
    'e2e_id':String(e2e_id), 
    'pix_key':String(pix_value), 
    'pix_value':String(pix_key)
  }

  // Simulate PIX API Response
  var response_api_pix = api_pix(casted_json);

  res.status(201).send({
    message: response_api_pix
  });

});

app.listen(port);