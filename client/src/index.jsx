import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './QuestionsAnswers/searchBar.jsx';
import QuestionsAnswersBox from './QuestionsAnswers/QuestionAnswerBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <QuestionsAnswersBox />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));