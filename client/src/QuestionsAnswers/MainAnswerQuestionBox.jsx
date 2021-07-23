import React from 'react';
import $ from 'jquery';
import testdata from './exampleData.jsx';
import AnswerPhotos from './AnswerPhotos.jsx';
import AskQuestions from './AskQuestionButtons.jsx';
import Report from './Report.jsx';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';

const MainAnswerQuestionBox = (props) => {
  const AnswerQuestionBox = testdata.map((data) => (
    <div key={data.id}>
      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>
            { data.Question }
            <div className='HelpfulQuestionCount'>
              <HelpfulQuestionCount
                questionhelpfulCount={props.questionhelpfulCount}
                ajaxGetQuestionHelpful={props.ajaxGetQuestionHelpful}
              />
            </div>
          </span>
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
          <HelpfulAnswerCount
            answerhelpfulCount={props.answerhelpfulCount}
            ajaxGetAnswerHelpful={props.ajaxGetAnswerHelpful}
          />
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

export default MainAnswerQuestionBox;
