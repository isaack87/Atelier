const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass in string to get from that endpoint
const getAPI = (params, cb) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/${params}`,
    headers: { Authorization: config.gitToken },
  }).then((response) => {
    cb(response);
  });
};

app.get('/', (req, res) => {
  getAPI('products', (err, results) => {
    if (err) {
      res.end();
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
