import React from 'react';
import $ from 'jquery';

const HelpfulQuestionCount = (props) => {
  const helpfulQuestionAjax = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/QuestionHelpful',
      contentType: 'application/json',
      success: () => {
        props.ajaxGetQuestionHelpful();
        console.log('success question counter++');
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className='helpfulQuestionCounter'>
      Helpful?
      <button type="submit" onClick={helpfulQuestionAjax} className="reporthelpful-btn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {props.questionhelpfulCount}
    </div>
  );
};

export default HelpfulQuestionCount;
