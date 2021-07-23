import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from '/Users/isaackim/Desktop/AtelierProject/Atelier/client/src/components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: '',
      user: '',
      stars: '',
      reportedArray: [],
    };
  }

  render() {
    return (
      <div>
        Hello World
        <QuestionsAnswersState />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
