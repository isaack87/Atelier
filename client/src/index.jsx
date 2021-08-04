import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/OverviewMain.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 28212,
      styleId: 162332,
      user: '',
      stars: '',
      reportedArray: [],
    };
    this.generateRandomProduct = this.generateRandomProduct.bind(this);
  }

  componentDidMount() {
    this.generateRandomProduct();
  }

  generateRandomProduct() {
    axios({
      method: 'get',
      url: '/random',
    })
      .then((response) => {
        console.log(response.data)
        this.setState({
          productId: response.data.productId,
          styleId: response.data.styleId,
        }, () => {
          console.log(this.state.productId);

        })

      })
      .catch((error) => {
        console.log('Error in getting data from step 1, ProductID', error);
      });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.productId != nextState.value;
  }

  render() {
    return (

      <div>
        <h1>FEC PROJECT</h1>
        <ProductOverview styleId={this.state.styleId} productId={this.state.productId} />
        <QuestionsAnswersState
          productId={this.state.productId}
        />
        <Reviews props={this.state} />
      </div>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
