import React from 'react';
import $ from 'jquery';
import MainAnswerQuestionBox from './MainAnswerQuestionBox.jsx'
import SearchBar from './searchBar.jsx'

class QuestionsAnswersState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleAnswers: 2,
      questionsList: [],
      answersList: [],
      answerhelpfulCount: [],
      questionhelpfulCount: [],
      isReported: false,
      mainProductID: props.mainProductId
    };
    this.search = this.search.bind(this);
    this.sendProductIdToServer = this.sendProductIdToServer.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.ajaxGetAnswerHelpful = this.ajaxGetAnswerHelpful.bind(this);
    this.ajaxGetQuestionHelpful = this.ajaxGetQuestionHelpful.bind(this);
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
  }

  componentDidMount() {
    this.sendProductIdToServer();
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
          questionsList: questions.results,
        });
      });
  }

    // need to use current questions id state to get current product answers matched to shown questions
  getAnswers() {
    fetch('http://localhost:3000/Answers')
      .then((response) => response.json())
      .then((answers) => {
        console.log('getanswers works');
        this.setState({
          answersList: answers.results,
        });
      });
  }

  loadMoreAnswers() {
    this.setState((prev) => {
      return {visibleAnswers: prev.visibleAnswers + 4}
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

  sendProductIdToServer() {
    this.productID = { pid: this.state.mainProductID };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/Questions',
      contentType: 'application/json',
      data: JSON.stringify(this.productID),
      success: () => {
        console.log(`sendproductidworks`);
      },
      error: () => {
        console.log('err sendProductIdToServer');
      },
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
            answerhelpfulCount={this.state.answerhelpfulCount}
            questionhelpfulCount={this.state.questionhelpfulCount}
            ajaxGetAnswerHelpful={this.ajaxGetAnswerHelpful}
            ajaxGetQuestionHelpful={this.ajaxGetQuestionHelpful}
            questionsList={this.state.questionsList}
            answersList={this.state.answersList}
            getAnswers={this.getAnswers}
            visibleAnswers={this.state.visibleAnswers}
            loadMoreAnswers={this.loadMoreAnswers}
          />
        </div>






      </div>
    );
  }
}

export default QuestionsAnswersState;
