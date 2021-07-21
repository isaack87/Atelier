import React from 'react';
import AskQuestions from './AskQuestionButtons.jsx'
import Answers from './AnswerData.jsx'
import SearchBar from './searchBar.jsx'
import $ from 'jquery';

class QuestionsAnswersBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.search = this.search.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions() {
    fetch('http://localhost:3000/QA')
      .then((question) => question.json())
      .then((question) => {
        this.setState({
          questions: question });
      });
  }

  search(term) {
    this.searchTerm = { search: term };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/QA',
      contentType: 'application/json',
      data: JSON.stringify(this.searchTerm),
      success: (data) => {
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
