import React from 'react';
import $ from 'jquery';

const HelpfulQuestionCount = (props) => {
  const helpfulQincrementer = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/qhelpful',
      contentType: 'application/json',
      data: JSON.stringify( {qhelpid: props.id } ),
      success: (data) => {
        console.log('helpfulQincrementer++ ');
      },
      error: () => {
        console.log('err helpfulAnswerAjax');
      },
    });
  };

  return (
    <div className="helpfulQuestionCounter">
      Helpful?
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