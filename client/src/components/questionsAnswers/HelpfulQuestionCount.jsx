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
        console.log('err helpfulQuestionAjax');
      },
    });
  };

  return (
    <div className='helpfulQuestionCounter'>
      Question Helpful?
      <button type="submit" onClick={helpfulQuestionAjax} className="questionhelpfulbtn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {props.questionhelpfulCount}
    </div>
  );
};

export default HelpfulQuestionCount;
