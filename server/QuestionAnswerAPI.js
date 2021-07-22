const axios = require('axios');
const config = require('../config');

// GET API FUNCTIONS
const getquestionAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=28215`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      return cb(response.data);
    })
    .catch(() => {
      console.log('getquestionapi error');
    });
};
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

const getanswerAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/213364/answers`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      return cb(response.data);
    })
    .catch(() => {
      console.log('getquestionapi error');
    });
};
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

const getHelpfulCount = (params, cb) => {
  const options = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=28215',
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      console.log(response.data.results);
      return response.data.results.map((helpful) => {
        const isHelpful = ({
          helpful: helpful.question_helpfulness,
        });
        return isHelpful;
      });
    })
    .then((data) => {
      cb(data);
    })
    .catch(() => {
      console.log('getquestionapi error');
    });
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
    // replace 213364 with a questio param query for no hardcoded for testing
    // when this put is run it just increments helpfu counter by +1
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/213364/helpful`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function finds product ID and updates helpful counter
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch putQuestionHelpful err');
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
  getHelpfulCount,
};
