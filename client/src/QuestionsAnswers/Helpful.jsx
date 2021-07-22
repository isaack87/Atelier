import React from 'react';
import $ from 'jquery';

const Helpful = () => {
  const helpfulCounterAjaxPost = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/QuestionHelpful',
      contentType: 'application/json',
      success: () => {
        console.log('success belpful counter++');
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  // helpfulCounterAjaxGet() {
  //   fetch('http://localhost:3000/QuestionHelpful')
  //     .then((response) => response.json())
  //     .then((questions) => {
  //       console.log(questions.helpful[0])
  //     });
  // }

   const count = 11 //helpfulCounterAjaxGet();

  return (
    <div>
      Helpful?
      <button type="submit" onClick={helpfulCounterAjaxPost} className="reporthelpful-btn">Yes</button>
      {count}
    </div>
  );
};

export default Helpful;
