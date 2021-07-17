import React from 'react';
import AskQuestions from './AskQuestionButtons.jsx'
import Answers from './AnswerData.jsx'

class QuestionsAnswersBox extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  render () {
    return (
      <div>
        <div className="AnswerQuestionBoxContainer">
        <Answers />
        </div>
      </div>
    )
  }
};

export default QuestionsAnswersBox;