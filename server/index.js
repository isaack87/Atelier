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
  this.getAPI(`products`, (err, results) => {
    if (err) {
      console.log('/ err');
    } else {
      res.send(results);
    }
  });
});





// Isaac Routes
// Questions Routes
app.get('/Questions', (req, res) => {
  const params = '';
  isaacAPI.getquestionAPI(params, (cb) => {
    res.status(200).send(cb);
  });
});

app.post('/Questions', (req, res) => {
  //const params = req.body;
  isaacAPI.postquestionAPI(params, (err) => {
    if (err) {
      console.log('Questions-post-err');
    }
    res.send('success');
  });
});

// Answers Routes
app.get('/Answers', (req, res) => {
  const params = '';
  isaacAPI.getanswerAPI(params, (cb) => {
    res.status(200).send(cb);
  });
});

app.post('/Answers', (req, res) => {
  const params = req.body;
  isaacAPI.postanswerAPI(params, (err) => {
    if (err) {
      console.log('answer-post-err');
    }
    res.send('success');
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Helpful Routes

app.get('/AnswerHelpful', (req, res) => {
  const params = '';
  isaacAPI.getAnswerCounter(params, (cb) => {
    res.status(200).send(cb);
  });
});

app.post('/AnswerHelpful', (req, res) => {
  const params = '';
  isaacAPI.putAnswerHelpful(params, (err) => {
    if (err) {
      console.log('answer-post-err');
    }
    res.send('success');
  });
});


app.get('/QuestionHelpful', (req, res) => {
  const params = '';
  isaacAPI.getQuestionCounter(params, (cb) => {
    res.status(200).send(cb);
  });
});

app.post('/QuestionHelpful', (req, res) => {
  const params = '';
  isaacAPI.putQuestionHelpful(params, (err) => {
    if (err) {
      console.log('answer-post-err');
    }
    res.send('success');
  });
});






// Louis Routes











// Helena Routes