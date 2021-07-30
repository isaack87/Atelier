const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');
const isaacAPI = require('./QuestionAnswerAPI');
const louisAPI = require('./ProductOverviewAPI');
const helenaAPI = require('./RatingsReviewsAPI');

app.use(express.static(`${__dirname} /../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass in string to get from that endpoint
const getAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/${params}?count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch axois error');
    });
};

app.get('/', (req, res) => {
  res.send('success');
});

app.post('/', (req, res) => {
  getAPI('products', (err, results) => {
    if (err) {
      console.log('/ err');
    } else {
      res.send(results);
    }
  });
});

// Isaac Routes
// Questions Routes
app.get('/QA', (req, res) => {
  res.status(200).send(isaacAPI.getquestionAPI());
});

app.post('/QA', (req, res) => {
  getAPI('products', (err) => {
    if (err) {
      console.log('qa-err');
    }
    res.send('success');
  });
});

// Answers Routes
app.get('/Answers', (req, res) => {
  res.status(200).send(isaacAPI.getanswerAPI());
});

app.post('/Answers', (req, res) => {
  getAPI('products', (err) => {
    if (err) {
      console.log('answer-err');
    }
    res.send('success');
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// Louis Routes

app.get('/productdetails', (req, res) => {
  res.send('success')
})


app.post('/productdetails', (req, res) => {
  console.log('get request')
  // console.log(req.body);
  louisAPI.getProductDetails(req.body.id)
    .then((data) => {
      // console.log('😈 data', data.data);
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/product/styles', (req, res) => {
  console.log(req.query)
  louisAPI.getProductIdStyles(req.query.pid, (data) => {
    // console.log(data)
    res.send(data.data);
  });
  // console.log('🟠 res.client', req.query);
});

app.post('/product/styles', (req, res) => {
  louisAPI.getProductIdStyles(req.body.id, (data) => {
    res.send(data.data);
  });
});









// Helena Routes
