import React from 'react';
import testdata from './exampleData.jsx';
import AnswerPhotos from './AnswerPhotos.jsx';
import AskQuestions from './AskQuestionButtons.jsx';
import Report from './Report.jsx';
import Helpful from './Helpful.jsx';

const Answers = (props) => {
  const AnswerQuestionBox = testdata.map((data) => (
    <div key={data.id}>
      <div className="questions-asked">
        <ul>
          <b>
            Q:
            { data.Question }
          </b>
        </ul>
        <ul>
          <b>
            A:
          </b>
          <span className="answertext">
            { data.Answer }
          </span>
        </ul>
      </div>

      <span className="user-data">
        <ul>
          by:
          {data.User}
          {data.Date}
          |
          <Helpful counter={props.counter} ajaxgethelpful={props.ajaxgethelpful} />
          |
          <Report />
        </ul>
      </span>
      <div className="answerPhotos">
        <AnswerPhotos />
      </div>
    </div>
  ),
)
  return (
    <div className="container">
      {AnswerQuestionBox}
      <AskQuestions />
    </div>
  );
};

export default Answers;
