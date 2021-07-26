import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from '/Users/isaackim/Desktop/AtelierProject/Atelier/client/src/components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: '28212',
      questionId: [],
      user: '',
      stars: '',
      reportedArray: [],
    };
    this.sendProductIdToServer = this.sendProductIdToServer.bind(this);
    this.getQuestionIdArray = this.getQuestionIdArray.bind(this);
  }

  componentDidMount() {

    this.getQuestionIdArray();
    this.sendProductIdToServer();
  }

  getQuestionIdArray() {
    fetch('http://localhost:3000/questions')
      .then((response) => response.json())
      .then((qids) => {
        console.log('get qids works');
        this.setState({
          questionId: qids.results.map((data) => data.question_id),
        });
      });
  }
  sendProductIdToServer() {
    const productID = { pid: this.state.productId, qid: this.state.questionId };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/questions',
      contentType: 'application/json',
      data: JSON.stringify(productID),
      success: () => {
        console.log('sendproductidworks');
      },
      error: () => {
        console.log('err sendProductIdToServer');
      },
    });
  }


  render() {
    return (
      <div>
        Hello World
        <QuestionsAnswersState
          questionId={this.state.questionId}
          mainProductId={this.state.productId}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
