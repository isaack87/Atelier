import React from 'react';
import $ from 'jquery';
import Answers from './AnswerData.jsx'
import SearchBar from './searchBar.jsx'

class QuestionsAnswersBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsList: [],
      questionResults: [],
      answersList: [],
      answersResults: [],
      answerhelpfulCount: [],
      questionhelpfulCount: [],
      isReported: false,
    };
    this.search = this.search.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.ajaxGetAnswerHelpful = this.ajaxGetAnswerHelpful.bind(this);
    this.ajaxGetQuestionHelpful = this.ajaxGetQuestionHelpful.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.getAnswers();
    this.ajaxGetAnswerHelpful();
    this.ajaxGetQuestionHelpful();
  }

  // need to use current product id state to get current product questions and limit to rendering 2 as current state on page load
  getQuestions() {
    fetch('http://localhost:3000/Questions')
      .then((response) => response.json())
      .then((questions) => {
        this.setState({
          questionsList: questions,
          questionResults: questions.results
        });
      });
  }

    // need to use current questions id state to get current product answers matched to shown questions
  getAnswers() {
    fetch('http://localhost:3000/Answers')
      .then((response) => response.json())
      .then((answers) => {
        this.setState({
          answersList: answers,
          answersResults: answers.results
        });
      });
  }

  ajaxGetAnswerHelpful() {
    fetch('http://localhost:3000/AnswerHelpful')
      .then((response) => response.json())
      .then((helpfulCounter) => {
        this.setState({
          answerhelpfulCount: helpfulCounter[0].helpful,
        });
      });
  }

  ajaxGetQuestionHelpful() {
    fetch('http://localhost:3000/QuestionHelpful')
      .then((response) => response.json())
      .then((helpfulCounter) => {
        this.setState({
          questionhelpfulCount: helpfulCounter[0].helpful,
        });
      });
  }

  search(term) {
    this.searchTerm = { search: term };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/Questions',
      contentType: 'application/json',
      data: JSON.stringify(this.searchTerm),
      success: (data) => {
        console.log(`success ${data} posted Questions`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div className="AnswerQuestionBoxContainer">
          <SearchBar onSearch={this.search} />
          <Answers
            answerhelpfulCount={this.state.answerhelpfulCount}
            questionhelpfulCount={this.state.questionhelpfulCount}
            ajaxGetAnswerHelpful={this.ajaxGetAnswerHelpful}
            ajaxGetQuestionHelpful={this.ajaxGetQuestionHelpful}
          />
        </div>
      </div>
    );
  }
}

export default QuestionsAnswersBox;
