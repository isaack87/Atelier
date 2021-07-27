import React from 'react';
import Moment from 'react-moment';


//import testdata from './exampleData.jsx';
import AnswerPhotos from './AnswerPhotos.jsx';
import AskQuestions from './AskQuestionButtons.jsx';
import Report from './Report.jsx';
import $ from 'jquery';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';

const MainAnswerQuestionBox = (props) => {
  const AnswerBox = props.answersList.slice(0, props.visibleAnswers).map((data) => (
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
            by: _
            { data.answerer_name }
            _
            <Moment format="MMMM-DD-YYYY" date={data.date} />
            _
            |
            _
            HelpFul?
            _
            <HelpfulAnswerCount />
            _
            {data.helpfulness}
            _
            |
            _
            <Report />

          </ul>
        </span>

        <div className="answerPhotos">
          <AnswerPhotos answersList={props.answersList} />
        </div>
      </div>
    </div>
  ));

  const QuestionBox = props.questionsList.slice(0, props.visibleQuestions).map((data, index) => (
    <div key={index}>
      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>
            { data.question_body }

            <div className="HelpfulQuestionCount">
              <HelpfulQuestionCount />
              <p className="questionhelpfont">{ data.question_helpfulness }</p>
            </div>
          </span>
        </ul>
      </div>
      {AnswerBox}
    </div>
  ));

  return (
    <div className="container">
      {QuestionBox}
      <AskQuestions
        loadMoreAnswers={props.loadMoreAnswers}
        loadMoreQuestions={props.loadMoreQuestions}
        btnvisible={props.btnvisible}
        btnvisibleq={props.btnvisibleq}
        mainProductId={props.mainProductId}
      />
    </div>

  );
};

export default MainAnswerQuestionBox;
