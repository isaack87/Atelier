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

//this variable will be the current this.state.productID (the item the page is now)
let currentproductID;

// pass in string to get from that endpoint
// const getAPI = (params, cb) => {
//   const options = {
//     method: 'GET',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/${params}?count=100`,
//     headers: { Authorization: config.gitToken },
//   };
//   axios(options)
//     .then((data) => {
//       console.log('axios get success');
//       return cb(data);
//     })
//     .catch(() => {
//       console.log('catch axois error');
//     });
// };

// app.get('/', (req, res) => {
//   res.send('success');
// });

// app.post('/', (req, res) => {
//   getAPI(`products`, (err, results) => {
//     if (err) {
//       console.log('/ err');
//     } else {
//       res.send(results);
//     }
//   });
// });

// Isaac Routes
// Questions Routes
app.get('/questions', (req, res) => {
  const id = currentproductID;

  isaacAPI.getquestionAPI(id, (cb) => {
    isaacAPI.putQuestionHelpful('214137');
    res.status(200).send(cb);
  });
});

app.post('/questions', (req, res) => {
  currentproductID = req.body.pid;
  isaacAPI.postquestionAPI(currentproductID, (err) => {
    if (err) {
      console.log('Questions-post-err');
    }
    res.send('success');
  });
});

// Answers Routes
app.get('/answer', (req, res) => {
  const params = '214137';
  isaacAPI.getanswerAPI(params, (cb) => {
    isaacAPI.putAnswerHelpful('1992416');
    res.status(200).send(cb);
  });
});

app.post('/answer', (req, res) => {
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







// Louis Routes











// Helena Routes