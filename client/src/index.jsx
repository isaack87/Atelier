import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './QuestionsAnswers/searchBar.jsx';
import QuestionsAnswersBox from './QuestionsAnswers/QuestionAnswerBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.search = this.search.bind(this);
    // this.getQuestions = this.getQuestions.bind(this);
  }

  // getQuestions() {
  //   fetch('http://localhost:3000/questions')
  //     .then((question) => question.json())
  //     .then((question) => {
  //       this.setState({
  //         questions: question });
  //     });
  // }

  search(term) {
    this.searchTerm = { search: term };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/questions',
      contentType: 'application/json',
      data: JSON.stringify(this.searchTerm),
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.search} />
        <QuestionsAnswersBox />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));