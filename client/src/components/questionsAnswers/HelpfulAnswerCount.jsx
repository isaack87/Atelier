import React from 'react';
import $ from 'jquery';

const HelpfulAnswerCount = (props) => {
  const helpfulAnswerAjax = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/AnswerHelpful',
      contentType: 'application/json',
      success: () => {
        props.ajaxGetAnswerHelpful();
        console.log('success answer counter++');
      },
      error: (err) => {
        console.log('err in helpfulanswerocount');
      },
    });
  };

  return (
    <div className='helpfulAnswerCounter'>
      Answer Helpful?
      <button type="submit" onClick={helpfulAnswerAjax} className="reporthelpful-btn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {props.answerhelpfulCount}
    </div>
  );
};

export default HelpfulAnswerCount;
