import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/OverviewMain.jsx'
import { ProductMainStateProvider } from './components/productState.jsx'

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
      <ProductMainStateProvider productId ={this.state.productId}>
        <div className="App-container">
          <h1>FEC PROJECT</h1>
          <ProductOverview productId={this.state.productId} />
          <div>
          <QuestionsAnswersState
            productId={this.state.productId}
          />
          </div>
          <Reviews props={this.state} />
        </div>
      </ProductMainStateProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
