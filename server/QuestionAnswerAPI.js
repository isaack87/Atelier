const axios = require('axios');
const config = require('../config');

// GET API FUNCTIONS
const getquestionAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${params}&count=100`,
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

const getanswerAPI = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${params}/answers?count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      return cb(response.data);
    })
    .catch(() => {
      console.log('getanswerAPI error');
    });
};

const getAnswerCounter = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${params}/answers?count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      return response.data.results.map((helpful) => {
        const isHelpful = ({
          helpful: helpful.helpfulness,
        });
        return isHelpful;
      });
    })
    .then((data) => {
      cb(data);
    })
    .catch(() => {
      console.log('getAnswerCounter error');
    });
};

const getQuestionCounter = (params, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${params}&count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      return response.data.results.map((helpful) => {
        const isHelpful = ({
          questionid: helpful.question_id,
          helpful: helpful.question_helpfulness,
        });
        return isHelpful;
      });
    })
    .then((data) => {
      cb(data);
    })
    .catch(() => {
      console.log('getQuestionCounter error');
    });
};

const getIsReportedStatus = (params, cb) => {
  const options = {
    method: 'GET',
    // change the hardcoded product id with param later
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${params}&count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      console.log('axios get success');
      console.log(response.data.results);
      return response.data.results.map((report) => {
        const reported = {
          reported: report.reported,
        };
        console.log(reported);
        return reported;
      });
    })
    .then((data) => {
      cb(data);
    })
    .catch(() => {
      console.log('get isreported error');
    });
};

/// POSTING API FUNCTIONS
const postquestionAPI = (params, cb) => {
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${params}&count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function that takes in user question asked and post to server API
      //console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch postquestionAPI err');
    });
};

const postanswerAPI = (params, cb) => {
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions${params}&count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function that post user answer to a question to API
      //console.log(response.data);
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
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${params}/helpful?count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function finds product ID and updates helpful counter
      //console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch putQuestionHelpful err');
    });
};

const putAnswerHelpful = (params, cb) => {
  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${params}/helpful?count=100`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function that finds answer id and updates helpful answer counter
      //console.log(response.data);
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
    // replace number  with a param {} for question id
    //
    //
    // change the number here everytime u report sinc eit goes away
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/2133722/report?count=100',
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //create function finds product ID and makes a report form
      //console.log(response.data);
    })
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch putReportQuestion err');
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
      //console.log(response.data);
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
  getQuestionCounter,
  getAnswerCounter,
  getIsReportedStatus,
  postanswerAPI,
  postquestionAPI,
  putQuestionHelpful,
  putReportQuestion,
  putAnswerHelpful,
  putReportAnswer,
};
