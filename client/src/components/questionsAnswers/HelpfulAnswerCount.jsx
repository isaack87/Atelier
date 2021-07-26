import React from 'react';
import $ from 'jquery';
import config from '../../../../config.js'

// this page post on click and sents back increase count

const HelpfulAnswerCount = () => {
  let test;
  $.ajax({
    method: 'PUT',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/1992416/helpful',
    headers: { Authorization: config.gitToken },
    contentType: 'application/json',
    success: () => {

    },
    error: () => {
      console.log('err helpfulAnswerAjax');
    },
  });

  return (
    <div className='helpfulQuestionCounter'>
      Question Helpful?
      <button type="submit" onClick={HelpfulAnswerCount} className="questionhelpfulbtn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {test}
    </div>
  );
};

export default HelpfulAnswerCount;
