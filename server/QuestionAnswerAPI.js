const axios = require('axios');
const config = require('../config');

// GET API FUNCTIONS

const getquestionAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${params}`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      // write a function here that grabs data from questions api coming back
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch questionAPI err');
    });
  /*
    this api returns this structure
  product_id: '28215',
  results: [
    {
      question_id: 213364,
      question_body: 'What fabric is the bottom made of?',
      question_date: '2018-09-12T00:00:00.000Z',
      asker_name: 'iluvcatz',
      question_helpfulness: 7,
      reported: false,
      answers: [Object]
    },
    */
};

const getanswerAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/213364/answers`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      // write function that handles what you want to do with answers API data coming back
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
  /*
    this api returns this structure
    question: '213364',
  page: 1,
  count: 5,
  results: [
    {
      answer_id: 1992439,
      body: 'Some kind of recycled rubber, works great!',
      date: '2018-10-12T00:00:00.000Z',
      answerer_name: 'iluvdogz',
      helpfulness: 7,
      photos: []
    },
    */
};

/// POSTING API FUNCTIONS
const postquestionAPI = (params, cb) => {
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=28215${params}`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function that takes in user question asked and post to server API
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch questionAPI err');
    });
};

const postanswerAPI = (params, cb) => {
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions${params}`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function that post user answer to a question to API
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
};

// PUT REQUEST APIS

const putQuestionHelpful = (params, cb) => {
  const options = {
    method: 'PUT',
    url: `/qa/questions/${params}/helpful/`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function finds product ID and updates helpful counter
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
};

const putReportQuestion = (params, cb) => {
  const options = {
    method: 'PUT',
    url: `/qa/questions/{":question_id"}/report`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function finds product ID and makes a report form
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
};

const putAnswerHelpful = (params, cb) => {
  const options = {
    method: 'PUT',
    url: `/qa/answers/{":answer_id"}/helpful`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function that finds answer id and updates helpful answer counter
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
};

const putReportAnswer = (params, cb) => {
  const options = {
    method: 'PUT',
    url: `/qa/answers/{":answer_id"}/report`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function finds answer product ID and reports it
      console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
};

module.exports = {
  getquestionAPI,
  getanswerAPI,
  postanswerAPI,
  postquestionAPI,
  putQuestionHelpful,
  putReportQuestion,
  putAnswerHelpful,
  putReportAnswer,
};
