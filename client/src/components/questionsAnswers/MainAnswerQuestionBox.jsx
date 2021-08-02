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
      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>


            {/* //////////////////////////////////// */}
            {props.questionanswerslist.filter((val) => {
              console.log(val, '😡')
              if (props.searchTerm === ('')) {
                return val;
              } else if (val.question.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                console.log(val, '🧍‍♂️');
                return val;
              }
            })
              .map((val, index) => <div key={index}>{val.question}</div>)}

                {/* //////////////////////////////////// */}

          </span>
          <p className="HelpfulQuestionCount">
            <HelpfulQuestionCount
            mainProductId={props.mainProductId}
              id={data.qID}
              defaultcounter={data.questionHelpful}
            />
            _
            <p className="questionhelpfont">{ data.question_helpfulness }</p>
            <QuestionReport qid={data.qID} />
            <AnswerForm pid={props.productId} qid={data.qID} />
          </p>
        </ul>
      </div>
      <div>
        <div>
          <ul>
            {data.answers.slice(0, props.visibleAnswers).map(answerlist => (
              <div key={answerlist.id}>
                <p className='answers-asked'> A: {answerlist.body.toString().toLowerCase()}
                  <br />
                  <br />
                  <span className="user-data">
                    { answerlist.answerer_name === 'Seller'
                      ? <b> {answerlist.answerer_name} </b>
                      : <normal>{answerlist.answerer_name}</normal> }
                    __
                    <Moment format="MMMM-DD-YYYY" date={answerlist.date} />
                    <HelpfulAnswerCount
                      id={answerlist.id}
                      mainProductId={props.mainProductId}
                      defaultcounter={answerlist.helpfulness}
                    />
                    _
                    __
                    <AnswerReport aID={answerlist.id} />
                  </span>
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
