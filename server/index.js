const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');

app.use(express.static(`${__dirname} /../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass in string to get from that endpoint
const getAPI = (params, cb) => {

let options = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/${params}`,
  headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.gitToken}`
  }
}

axios(options)
.then ((repo) => {
  cb(repo)
console.log('axios get success')
})
.catch (() => {
  console.log('error auth')
})
}


app.get('/', (req, res) => {
  getAPI('products', (err, results) => {
    if (err) {
      console.log('errpro');
    } else {
      res.send(results);
    }
  });
});

app.post('/', (req, res) => {
  res.send('successs');
});

// Questions Routes
app.get('/questions', (req, res) => {
  let searched = req.body.search;
  getAPI(`${searched}`, (err, results) => {
    if (err) {
      console.log('errquest');
    } else {
      console.log(result)
      res.send(results);
    }
  });
});

app.post('/questions', (req, res) => {
  res.send('successs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
