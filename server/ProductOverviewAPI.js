const axios = require('axios');
const config = require('../config');

// GET API FUNCTIONS
const getProductDetails = (productId) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
    headers: { Authorization: config.gitToken },
  };
  return axios(options);
};

const getProductIdStyles = (productId, cb) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
    headers: { Authorization: config.gitToken },
  };
  axios(options)
    .then((data) => {
      return cb(data);
    })
    .catch((err) => {
      console.log(err);
    });
};




module.exports = {
  getProductDetails, getProductIdStyles,







}