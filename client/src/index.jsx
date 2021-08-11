import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/OverviewMain.jsx';
import { ProductMainStateProvider } from './components/questionsAnswers/productState.jsx';
import TopSearchBar from './components/TopSearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 28299,
      user: '',
      stars: '',
      reportedArray: [],
    };
    this.search = this.search.bind(this);
  }

  search(term) {
    this.setState({
      productId: term
    });
  }

  render() {
    return (
      <div className="App-container">
        <ProductMainStateProvider productId ={this.state.productId}>
          <TopSearchBar onSearch={this.search}/>
          <ProductOverview productId={this.state.productId} />
          <QuestionsAnswersState productId={this.state.productId} />
          <Reviews props={this.state} />
        </ProductMainStateProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
