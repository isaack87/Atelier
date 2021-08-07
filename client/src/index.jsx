import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/OverviewMain.jsx'
import { ProductMainStateProvider } from './components/questionsAnswers/productState.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 28250,
      user: '',
      stars: '',
      reportedArray: [],
    };
  }

  render() {
    return (








      <div className="App-container">
         <h1>FEC PROJECT</h1>

        <ProductOverview productId={this.state.productId} />
        <div>
        <QuestionsAnswersState
          productId={this.state.productId}
        />

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
