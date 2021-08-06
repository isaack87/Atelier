import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/OverviewMain.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 28212,
      user: '',
      stars: '',
      reportedArray: [],
    };
  }

  render() {
    return (



      <div className="App-container">
        <ProductOverview productId={this.state.productId} />
        <div className="q-a-box">
          <div className="qacontainer">
        <QuestionsAnswersState
          productId={this.state.productId}
        />
        </div>
        </div>
        <Reviews props={this.state} />
      </div>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
