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

// Isaac Routes
// Questions Routes
app.get('/questions', (req, res) => {
   let pid = req.query.qid
  isaacAPI.getquestionAPI(pid, (cb) => {
    res.send(cb);
  });
});

app.post('/questions', (req, res) => {
  let currentproductID = req.body.pid;
  res.send('post questtion route success');
});

// Answers Routes
app.post('/answer', (req, res) => {
  let currentQuestionIDS = req.body.qid;
  res.send('answer post success');
});

app.get('/answer', (req, res) => {
  // console.log('answer test get');
  // console.log(req.query)
  //const params = [213356, 213355, 213349, 213357, 213350, 213351];
  // for (let i = 0; i < params.length; i++) {
    isaacAPI.getanswerAPI(213356, (cb) => {
      res.send(cb);
    });
  // }
});

app.get('/qhelpful', (req, res) => {
  res.send('qhelpful post success');
});

app.post('/qhelpful', (req, res) => {
  isaacAPI.putQuestionHelpful('213336', cb => {
    res.send(cb);
  });
});

app.get('/addAnswer', (req, res) => {
  res.send('answer post success');
});

app.post('/addAnswer', (req, res) => {
  let test = '28212';
  isaacAPI.postanswerAPI(test);
  res.send('answer post success');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});







// Louis Routes











// Helena Routes
