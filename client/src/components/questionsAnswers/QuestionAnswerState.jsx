import React from 'react';
import $ from 'jquery';
import MainAnswerQuestionBox from './MainAnswerQuestionBox.jsx'
import SearchBar from './searchBar.jsx'
const fetch = require('node-fetch');

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
      searched: false,
      qid: [],
      searchTerm: "",
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
        if (questions.results.length > 2) {
          this.setState({
            btnvisibleq: true,
          });
        } else {
          this.setState({
            btnvisibleq: false,
          });
        }
        this.setState({
          questionsList: questions.results,
          newtest: questions.results.map(data => {
            return data.question_body
          })
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
      success: () => {
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
    if ((this.state.visibleAnswers >= this.state.questionsList.length) || (this.state.questionsList.length === 0)) {
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
    let searchTerm = term;
    if (searchTerm.length >= 3) {
      this.setState({
        searched: true,
        searchTerm: searchTerm
      });
    }
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
            productId={this.state.productId}
            mainProductId={this.state.productId}
            searched={this.state.searched}
            searchTerm={this.state.searchTerm}
            questionanswerslist={this.state.questionanswerslist}
          />
        </div>
      </div>
    );
  }
}

export default QuestionsAnswersState;




// let searchedArray = [];
//     let questions = this.state.questionanswerslist.map(data => {
//       console.log(data.question, '😀😀😀')
//       if (data.question.includes(searchTerm) && searchTerm.length >= 3) {
//         searchedArray.push(data.question);
//         this.setState({
//           searchedArray: searchedArray,
//           searched: true
//         })

//       }
//     });