import React from 'react';
import Moment from 'react-moment';
import AskQuestions from './AskQuestionButtons.jsx';
import AnswerReport from './AnswerReport.jsx';
import QuestionReport from './QuestionReport.jsx';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';
import AnswerForm from './AnswerForm.jsx';
import AnswerPhotos from  './AnswerPhotos.jsx'

const MainAnswerQuestionBox = (props) => {
  const QABOX = props.questionanswerslist.slice(0, props.visibleQuestions).map((data) => (
    <div className='QABOX'>
    <div key={data.qID}>
        <ul>
          <div className="questionbox">
            <b>
              Q:  {data.question}
            </b>
          <p className="questionuserbar qbarspacing">
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


                  <div>
                    {answerlist.photos.map((photo, index) => {
                         return (
                          <div className='img img-spacing' key={index}>
                              <img src={photo} className="img"/>
                          </div>
                        );
                    })}
                    </div>
                  </div>
        ))}
        </ul>
      </div>


              </div>
            ))}
        </div>
        <AnswerPhotos />

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