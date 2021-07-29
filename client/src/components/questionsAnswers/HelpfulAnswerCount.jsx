import React from 'react';
import $ from 'jquery';

// this page post on click and sents back increase count

const HelpfulAnswerCount = (props) => {
  const helpfulAincrementer = () => {
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/ahelpful`,
      contentType: 'application/json',
      data: JSON.stringify({ahelpid: props.id}),
      success: (data) => {
        console.log('helpfulAincrementer++');
      },
      error: () => {
        console.log('err helpfulAnswerAjax');
      },
    });
  };
  return (
    <div className='helpfulQuestionCounter'>
      <button type="submit" onClick={helpfulAincrementer} className="answerhelpfulbtn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {/* {test} */}
    </div>
  );
};

export default HelpfulAnswerCount;
