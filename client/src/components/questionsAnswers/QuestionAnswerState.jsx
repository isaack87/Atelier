import React from 'react';
import $ from 'jquery';
import MainAnswerQuestionBox from './MainAnswerQuestionBox.jsx'
import SearchBar from './searchBar.jsx'

class QuestionsAnswersState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnvisible: true,
      btnvisibleq: true,
      visibleAnswers: 2,
      visibleQuestions: 2,
      visibleQuestions: 2,
      questionsList: [],
      answersList: [],
      isReported: false,
      mainProductID: props.mainProductId,
      questionId: props.questionId
    };
    this.search = this.search.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.getAnswers();
  }

  getQuestions() {
    fetch('http://localhost:3000/questions')
      .then((response) => response.json())
      .then((questions) => {
        this.setState({
          questionsList: questions.results,
        });
      });
  }

  getAnswers() {
    fetch('http://localhost:3000/Answer')
      .then((response) => response.json())
      .then((answers) => {
        console.log('getanswers works');
        this.setState({
          answersList: answers.results,
        });
      });
  }

  loadMoreAnswers() {
    if (this.state.visibleAnswers >= this.state.questionsList.length) {
      this.setState({
        btnvisible: false,
      });
    }
    this.setState((prev) => ({ visibleAnswers: prev.visibleAnswers + 2 }));
  }

  loadMoreQuestions() {
    if (this.state.visibleQuestions >= this.state.questionsList.length) {
      this.setState({
        btnvisibleq: false,
      });
    }
    this.setState((prev) => ({ visibleQuestions: prev.visibleQuestions + 2, visibleAnswers: 2 }));
  }

  search(term) {
    this.searchTerm = { search: term };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/Question',
      contentType: 'application/json',
      data: JSON.stringify(this.searchTerm),
      success: (data) => {
        console.log(`success posted Questions`);
      },
      error: (err) => {
        console.log('err search');
      },
    });
  }

  render() {
    return (
      <div>
        <div className="AnswerQuestionBoxContainer">
          <SearchBar onSearch={this.search} />
          <MainAnswerQuestionBox
            questionsList={this.state.questionsList}
            answersList={this.state.answersList}
            loadMoreAnswers={this.loadMoreAnswers}
            loadMoreQuestions={this.loadMoreQuestions}
            visibleAnswers={this.state.visibleAnswers}
            visibleQuestions={this.state.visibleQuestions}
            btnvisibleq={this.state.btnvisibleq}
            btnvisible={this.state.btnvisible}
            photos={this.state.photos}
          />
        </div>
      </div>
    );
  }
}

export default QuestionsAnswersState;
