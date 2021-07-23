import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './QuestionsAnswers/searchBar.jsx';
import QuestionsAnswersState from '../src/QuestionsAnswers/QuestionAnswerState.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <QuestionsAnswersState />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));