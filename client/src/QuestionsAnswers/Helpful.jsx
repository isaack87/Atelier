import React from 'react';
import $ from 'jquery';

const Helpful = (props) => {
  const helpfulCounterAjaxPost = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/QuestionHelpful',
      contentType: 'application/json',
      success: () => {
        props.ajaxgethelpful();
        console.log('success helpful counter++');
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div>
      Helpful?
      <button type="submit" onClick={helpfulCounterAjaxPost} className="reporthelpful-btn">Yes</button>
      {/* should be the helpfulcount state from questionsanswerbox file but not workinging */}
      {props.counter}
    </div>
  );
};

export default Helpful;
