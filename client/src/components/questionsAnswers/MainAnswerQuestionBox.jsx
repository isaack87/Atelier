import React from 'react';
import Moment from 'react-moment';
import LoadMoreAnswers from './LoadMoreAnswers.jsx'


//import testdata from './exampleData.jsx';
import AnswerPhotos from './AnswerPhotos.jsx';
import AskQuestions from './AskQuestionButtons.jsx';
import Report from './Report.jsx';
import $ from 'jquery';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';

const MainAnswerQuestionBox = (props) => {


  const QABOX = props.questionanswerslist.slice(0, props.visibleQuestions).map((data, index) => (
    <div key={index}>

      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>
            { data.question }
            <div className="HelpfulQuestionCount">
              <HelpfulQuestionCount />
              <p className="questionhelpfont">{ data.question_helpfulness }</p>
            </div>
          </span>
        </ul>
      </div>


      <div className="questions-asked">
        <div>
          <ul>

            <b>
              A:
            </b>
            <div className="answertext">
              {data.answers.map(a => {
                 <p>{a.body}</p>
              })}
            </div>
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
        {/* <div className="answerPhotos">
          <AnswerPhotos answersList={props.answersList} />
        </div> */}
      </div>
    </div>

  ));

  return (
    <div className="container">
      {QABOX}
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
