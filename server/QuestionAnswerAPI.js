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

const postanswerAPI = (params, cb) => {
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/213364/answers`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //post function here after getting user input from a form box on client side
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
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=28215`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((response) => {
      //post user inputted question on client side to API after matching id params function needed here
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






module.exports = {
  getquestionAPI,
  getanswerAPI,
};
