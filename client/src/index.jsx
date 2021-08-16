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
      productId: 36307,
      user: '',
      stars: '',
      reportedArray: [],
      avgRating: 0
    };
    this.search = this.search.bind(this);
    this.updateAvgRatingForProduct = this.updateAvgRatingForProduct.bind(this);
  }
  //handles updating avg rating for a product
  updateAvgRatingForProduct(rating) {
    this.setState({ avgRating: rating });
  }
  search(term) {
    this.setState({
      productId: parseInt(term)
    }, () => {
      console.log('product id changed to ', this.state.productId);
    });
  }

  random(cb) {
    let number = Math.floor(Math.random() * (36320 - 36300) + 36300);
    this.setState({
      productId: number,
    }, () => {
      console.log('product id changed to: ', this.state.productId);
      cb();
    });
  }

  toggleDark() {
    const element = document.body;
    element.classList.toggle('dark-mode');
  }

  render() {
    return (
      <div className="App-container">
        <ProductMainStateProvider productId ={this.state.productId}>
          <TopSearchBar onSearch={this.search}/>
          <ProductOverview productId={this.state.productId} random={this.random.bind(this)} avgRating = {this.state.avgRating}/>
          <QuestionsAnswersState productId={this.state.productId} />
          <Reviews props={this.state} avgRatingFunc = {this.updateAvgRatingForProduct} />
        </ProductMainStateProvider>
        <button onClick={this.toggleDark.bind(this)}>Toggle Dark Mode</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
