import React from 'react';
import Moment from 'moment';
import AskQuestions from './AskQuestionButtons.jsx';
import AnswerReport from './AnswerReport.jsx';
import QuestionReport from './QuestionReport.jsx';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';
import AnswerForm from './AnswerForm.jsx';

const MainAnswerQuestionBox = (props) => {
  const QABOX = props.questionanswerslist.slice(0, props.visibleQuestions).map((data, index) => (
    <div key={data.qID}>
      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>
            { data.question }
            <div className="HelpfulQuestionCount">
              <HelpfulQuestionCount id={data.qID} />
              _
              {data.questionHelpful}
              _
              <p className="questionhelpfont">{ data.question_helpfulness }</p>
              <QuestionReport qid={data.qID} />
              <AnswerForm qid={data.qID} />
            </div>
          </span>
        </ul>
      </div>

      <div className="questions-asked">
        <div>
          <ul>
            {data.answers.slice(0, props.visibleAnswers).map(answerlist => (
              <div key={answerlist.id}>
              <p className='indent'> A: {answerlist.body}
                <br/>
                <br/>
                <p className="user-data">by: {answerlist.answerer_name}
                  __
                  <Moment format="MMMM-DD-YYYY" date={answerlist.date} />
                  __
                  HelpFul?
                  <HelpfulAnswerCount id={answerlist.id}/> _{answerlist.helpfulness}
                  __
                  <AnswerReport aID={answerlist.id} />
                </p>
              </p>
              </div>
            ))}
          </ul>
          </div>

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
