import React from 'react';
//import testdata from './exampleData.jsx';
import AnswerPhotos from './AnswerPhotos.jsx';
import AskQuestions from './AskQuestionButtons.jsx';
import Report from './Report.jsx';
import $ from 'jquery';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';

const MainAnswerQuestionBox = (props) => {

  const QuestionBox = props.questionsList.slice(0, 2).map((data, index) => (
    <div key={index}>
      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>
            { data.question_body }
            <div className="HelpfulQuestionCount">
              <HelpfulQuestionCount
              />
            </div>
          </span>
        </ul>
      </div>
    </div>
  ));


  const AnswerBox = props.answersList.slice(0, props.visibleAnswers).map((data, index) => (
    <div key={data.answer_id}>
    <div className="questions-asked">
      <div>
        <ul>
          <b>
            A:
          </b>
          <span className="answertext">
            { data.body }
          </span>
        </ul>
      </div>
      <span className="user-data">
        <ul>
          by:
          { data.answerer_name }
          { data.date }
          {' ' } HelpFul? {data.helpfulness}
          |
           <HelpfulAnswerCount/>
          |
          <Report />
        </ul>
      </span>

      <div className="answerPhotos">
        <AnswerPhotos />
      </div>
    </div>
    </div>
  ));

  return (
    <div className="container">
      {QuestionBox[0]}
      {AnswerBox}
      {QuestionBox[1]}
      {AnswerBox}
      <AskQuestions
        loadMoreAnswers={props.loadMoreAnswers}
        btnvisible={props.btnvisible}
      />
    </div>

  );
};

export default MainAnswerQuestionBox;
