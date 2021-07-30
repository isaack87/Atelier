import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/products.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 28299,
      user: '',
      stars: '',
      reportedArray: [],
    };
  }
  render() {
    return (
      <div>Hello World
        <ProductOverview productId={this.state.productId}/>
        <QuestionsAnswersState
        productId={this.state.productId}
        />

        <Reviews props={this.state}/>
      </div>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));








