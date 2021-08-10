const express = require('express');

const app = express();

const port = 3000;
const bodyParser = require('body-parser');
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
  res.send('')
});

app.post('/ahelpful', (req, res) => {
  const ahelpfulId = req.body.ahelpid;
  // console.log(req.body);
  isaacAPI.putAnswerHelpful(ahelpfulId, () => {
    res.send('answerhelp post success');
  });
});

app.get('/qhelpful', (req, res) => {
  const pid = req.query.qid;
  // console.log(pid, '😅😅😅');
  isaacAPI.getQuestionHelpCounter(pid, (cb) => {
    res.send(cb);
  });
});

app.post('/qhelpful', (req, res) => {
  const qhelpfulId = req.body.qhelpid;
  isaacAPI.putQuestionHelpful(qhelpfulId, () => {
    res.send('question help post success');
  });
});

app.get('/addAnswer', (req, res) => {
  res.send('answer post success');
});


app.post('/addAnswer', (req, res) => {
  const data = req.body;
  // console.log(data, '😁');
  isaacAPI.postanswerAPI(data);
  res.send('answer post success');
});


app.get('/addQuestion', (req, res) => {
  res.send('answer post success');
});

app.post('/addQuestion', (req, res) => {
  // console.log(req.body, '🙂');
  isaacAPI.postquestionAPI(req.body);
  res.send('question post success');
});

app.get('/uploadphoto', (req, res) => {
  res.send('answer post success');
});

app.post('/uploadphoto', (req, res) => {
  // console.log(req.body, '🙂');
  isaacAPI.postquestionAPI(req.body);
  res.send('question post success');
});












app.get('/productdetails', (req, res) => {
  res.send('success');
});

app.post('/productdetails', (req, res) => {
  // console.log('get request');
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
  // console.log(req.query);
  louisAPI.getProductIdStyles(req.query.pid, (data) => {

    res.send(data.data);
  });
});


app.post('/product/styles', (req, res) => {
  louisAPI.getProductIdStyles(req.body.id, (data) => {
    res.send(data.data);
  });
});




// Louis Routes


// Helena Routes

app.post('/reviews', async (req, res) => {
  let productID = req.body.productID;
  res.status(200).send(await helenaAPI.getReviewsAPI(productID))
})

app.post('/postReview', async(req, res) => {
  res.status(200).send(await helenaAPI.postReview(28215));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
