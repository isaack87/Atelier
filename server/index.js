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
  const pid = req.query.qid;
  isaacAPI.getquestionAPI(pid, (cb) => {
    res.send(cb);
  });
});

app.post('/questions', (req, res) => {
  res.send('post questtion route success');
});

app.post('/answer', (req, res) => {
  res.send('done');
});

app.get('/answer', (req, res) => {
  res.send('done');
});



app.get('/ahelpful', (req, res) => {
  res.send('qhelpful post success');
});

app.post('/ahelpful', (req, res) => {
  const ahelpfulId = req.body.ahelpid;
  console.log(req.body);
  isaacAPI.putAnswerHelpful(ahelpfulId, () => {
    res.send('answerhelp post success');
  });
});

app.get('/qhelpful', (req, res) => {
  res.send('qhelpful post success');
});

app.post('/qhelpful', (req, res) => {
  console.log(req.body);
  const qhelpfulId = req.body.qhelpid;
  isaacAPI.putQuestionHelpful(qhelpfulId, () => {
    res.send('question help post success');
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
