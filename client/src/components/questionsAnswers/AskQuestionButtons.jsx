import React from 'react';
import LoadMoreAnswers from './LoadMoreAnswers.jsx'

const AskQuestions = (props) => (
  <div>
    <LoadMoreAnswers
      loadMoreAnswers={props.loadMoreAnswers}
      btnvisible={props.btnvisible}
    />
    <div className="buttons">
      <button className="add-q-btn" type="submit"> MORE ANSWERED QUESTIONS</button>
      <button className="add-q-btn" type="submit">
        ADD A QUESTION
        <img alt="plusimage" className="imgplus" src="plus.png" />
      </button>
    </div>
  </div>
);

export default AskQuestions;
