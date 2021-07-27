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
  let id = 28213;

  isaacAPI.putQuestionHelpful('214137');
  isaacAPI.getquestionAPI(id, (cb) => {
    res.send(cb);
  });
});

app.post('/questions', (req, res) => {
  currentproductID = req.body.pid;
  res.send('success');
});

// Answers Routes
app.post('/answer', (req, res) => {
  currentQuestionIDS = req.body.qid;
  res.send('answer post success');
});

app.get('/answer', (req, res) => {
  // let params = [213345, 213346, 213341, 213344, 213339, 232432]
  isaacAPI.getanswerAPI('213345', (cb) => {
   res.send(cb);
  })
});


// app.post('/answer', (req, res) => {
//   currentQuestionIDS = req.body.qid;
//     isaacAPI.putAnswerHelpful('1992416');
//     const data = currentQuestionIDS;
//     const newData = [];
//     for (let i = 0; i < data.length; i++) {
//       isaacAPI.getanswerAPI(data[i], (cb) => {
//         newData.push(cb);
//       });
//       return newData;
//     }
//     res.send(newData);
// });

// isaacAPI.postanswerAPI(params, (err) => {
//   if (err) {
//     console.log('answer-post-err');
//   }
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});







// Louis Routes











// Helena Routes
