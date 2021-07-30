const axios = require('axios');
const config = require('../config');


const getReviewsAPI = (productID, sortKind = 'helpful') => {
    //makes call to the api
    //the param is what we're looking for
 

     let options = {
        method: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productID}&sort=${sortKind}$count=100`,
        headers: { Authorization: config.gitToken },
      };
      return  axios(options)
      .then(response => {
          console.log('response.', response.data)
          return response.data;
      })

}

const postReview = async (productID) => {
    let params =  {
        "product_id": 28215,
        "rating": 5,
        "summary": "this is awesome",
        "body": "it fits me perfectly",
        "recommend": true,
        "name": "helena",
        "email": "helena@yahoo.com",
        "photos": [],
        "characteristics":  { "14": 5, "15": 5}
   

    };
 

    let options = {
        method: 'post',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
        headers: { Authorization: config.gitToken},
        data: params
      };
       await axios(options)
      .then(response => {
          console.log('posting review', response);
      })
}




module.exports = {
    getReviewsAPI,
     postReview
};
