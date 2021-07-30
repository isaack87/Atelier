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
    </div>
  );
};

export default HelpfulQuestionCount;
