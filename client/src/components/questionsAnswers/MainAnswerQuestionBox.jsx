import React from 'react';
//import testdata from './exampleData.jsx';
import AnswerPhotos from './AnswerPhotos.jsx';
import AskQuestions from './AskQuestionButtons.jsx';
import Report from './Report.jsx';
import HelpfulAnswerCount from './HelpfulAnswerCount.jsx';
import HelpfulQuestionCount from './HelpfulQuestionCount.jsx';

const MainAnswerQuestionBox = (props) => {

  const QuestionBox = props.questionsList.slice(0, 2).map((data) => (
    <div key={data.question_id}>
      <div className="questions-asked">
        <ul>
          <span className="questiontext">
            <b>
              Q:
            </b>
            { data.question_body }
            <div className="HelpfulQuestionCount">
              <HelpfulQuestionCount
                questionhelpfulCount={props.questionhelpfulCount}
                ajaxGetQuestionHelpful={props.ajaxGetQuestionHelpful}
              />
            </div>
          </span>
        </ul>
      </div>
    </div>
  ));


  const AnswerBox = props.answersList.map((data, index) => (
    <div key={index}>
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


    </div>



  ));

  return (
    <div className="container">
      {QuestionBox}
      {AnswerBox}
      <AskQuestions getAnswers={props.getAnswers} />
    </div>
  );
};

export default MainAnswerQuestionBox;
