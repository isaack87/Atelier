import React from 'react';
import $ from 'jquery';
import config from '../../../../config.js'

const HelpfulQuestionCount = () => {
  let test;
  $.ajax({
    method: 'PUT',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/213336/helpful',
    headers: { Authorization: config.gitToken },
    contentType: 'application/json',
    success: () => {
      console.log('put success to questions');
    },
    error: () => {
      console.log('err helpfulAnswerAjax');
    },
  });

  return (
    <div className="helpfulQuestionCounter">
      Question Helpful?
      <button type="submit" onClick={HelpfulQuestionCount} className="questionhelpfulbtn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {test}
    </div>
  );
};

export default HelpfulQuestionCount;




// fetch('http://localhost:3000/question')
// .then((response) => response.json())
// .then((helpfulCounter) => {
//    test = helpfulCounter.results.map( data => {
//     return data.question_helpfulness
//    })
//    console.log('this is question count', test)

// });

// fetch('http://localhost:3000/Answer')
// .then((response) => response.json())
// .then((helpfulCounter) => {
//   console.log('success question counter++');
//    test = helpfulCounter.results.map( data => {
//     return data.helpfulness
//    })
//    console.log('this is answer counts', test)

// });