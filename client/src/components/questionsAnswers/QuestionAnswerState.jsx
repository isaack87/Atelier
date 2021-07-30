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
      questionsList: [],
      questionanswerslist: [],
      answersList: [],
      isReported: false,
      qid: [],
      productId: props.productId,
    };
    this.search = this.search.bind(this);
    this.sendProductIdToServer = this.sendProductIdToServer.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
    this.sendQidToServer = this.sendQidToServer.bind(this);
    this.getQuestionAnswerList = this.getQuestionAnswerList.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestionAnswerList() {
    const list = this.state.questionsList
    const newObj = [];
    list.map(e => {
      newObj.push({
        qID: e.question_id,
        question: e.question_body,
        questionHelpful: e.question_helpfulness,
        answers: Object.values(e.answers),
      });
    });

    this.setState({
      questionanswerslist: newObj,
    });
  }

  getQuestions() {
    fetch(`http://localhost:3000/questions?qid=${this.state.productId}`)
      .then((response) => response.json())
      .then((questions) => {
        this.setState({
          questionsList: questions.results,
        });
      })
      .then(() => {
        this.sendProductIdToServer();
        this.getQuestionAnswerList();
      });
    console.log('getquestions test');
  }

  sendProductIdToServer() {
    const productID = { pid: this.state.productId };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/questions',
      contentType: 'application/json',
      data: JSON.stringify(productID),
      success: (data) => {
        console.log(`sendproductidworks`);
      },
      error: () => {
        console.log('err sendProductIdToServer');
      },
    });
    this.sendQidToServer();
  }

  sendQidToServer() {
    const qID = { qid: this.state.qid };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/answer',
      contentType: 'application/json',
      data: JSON.stringify(qID),
      success: () => {
        console.log(`sendproductidworks`);
      },
      error: () => {
        console.log('err sendProductIdToServer');
      },
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
    let searchTerm = { search: term };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/questions',
      contentType: 'application/json',
      data: JSON.stringify(searchTerm),
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
            questionanswerslist={this.state.questionanswerslist}
          />
        </div>
      </div>
    );
  }
}

export default QuestionsAnswersState;
