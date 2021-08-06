import React from 'react';
import Moment from 'react-moment';
import AskQuestions from './AskQuestionButtons.jsx';
import AnswerReport from './AnswerReport.jsx';
import QuestionReport from './QuestionReport.jsx';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';
import AnswerForm from './AnswerForm.jsx';

const MainAnswerQuestionBox = (props) => {
  const QABOX = props.questionanswerslist.slice(0, props.visibleQuestions).map((data) => (
    <div key={data.qID}>
        <ul>
          <div className="questionbox">
          <div className="horizontal">
            <b>
              Q:  {data.question}
            </b>
          </div>
          <p className="questionuserbar horizontal">
            <HelpfulQuestionCount
            mainProductId={props.mainProductId}
              id={data.qID}
              defaultcounter={data.questionHelpful}
            />

            <p>{ data.question_helpfulness}</p>
            <QuestionReport qid={data.qID} />
            <AnswerForm pid={props.productId} qid={data.qID} />
          </p>
          </div>
        </ul>

      <div>
        <div>
          <ul>
            {data.answers.slice(0, props.visibleAnswers).map(answerlist => (
              <div key={answerlist.id}>
                <p className='answerbox'> A: {answerlist.body.toString().toLowerCase()}
                  <br />
                  <br />
                </p>
                  <div className="userinfobox">
                    { answerlist.answerer_name === 'Seller'
                      ? <b> {answerlist.answerer_name} </b>
                      : <normal>{answerlist.answerer_name}</normal> }
                    <Moment format="MMMM-DD-YYYY" date={answerlist.date} />
                    <HelpfulAnswerCount
                      id={answerlist.id}
                      mainProductId={props.mainProductId}
                      defaultcounter={answerlist.helpfulness}
                    />
                    <AnswerReport aID={answerlist.id} />
                  </div>
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


    <div className="flex-container">
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
