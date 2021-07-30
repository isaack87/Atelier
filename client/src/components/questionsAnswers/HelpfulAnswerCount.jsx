import React from 'react';
import $ from 'jquery';

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
    </div>
  );
};

export default HelpfulAnswerCount;
