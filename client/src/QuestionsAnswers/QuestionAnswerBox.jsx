import React from 'react';
import AskQuestions from './AskQuestionButtons.jsx'
import Answers from './AnswerData.jsx'
import SearchBar from './searchBar.jsx'
import $ from 'jquery';

class QuestionsAnswersBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsList: [],
      questionResults: [],
      answersList: [],
      answersResults: []
    };
    this.search = this.search.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.getAnswers();
  }

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
          <Answers />
        </div>
      </div>
    );
  }
}

export default QuestionsAnswersBox;
