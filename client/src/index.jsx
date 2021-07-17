import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './QuestionsAnswers/searchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div><SearchBar /></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
