import React from 'react';
import $ from 'jquery';

const HelpfulQuestionCount = () => {
  const helpfulQincrementer = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/qhelpful',
      contentType: 'application/json',
      success: () => {
        console.log('helpfulQincrementer++ ');
      },
      error: () => {
        console.log('err helpfulAnswerAjax');
      },
    })
    // .then (() => {
    //   $.ajax({
    //     method: 'GET',
    //     url: 'http://localhost:3000/qhelpful',
    //     contentType: 'application/json',
    //     success: () => {
    //       console.log('helpfulQincrementer++ ');
    //     },
    //     error: () => {
    //       console.log('err helpfulAnswerAjax');
    //     },
    //   })
    // })
  };

  return (
    <div className="helpfulQuestionCounter">
      Question Helpful?
      <button type="submit" onClick={helpfulQincrementer} className="questionhelpfulbtn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {/* {test} */}
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