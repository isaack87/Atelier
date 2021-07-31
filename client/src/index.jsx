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
      productId: 28296,
      user: '',
      stars: '',
      reportedArray: [],
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <div>Hello World
        {/* <ProductOverview productId={this.state.productId}/>
        <QuestionsAnswersState
        productId={this.state.productId}
        /> */}

        <Reviews props={this.state}/>
=======
      <div>
        Hello World
        <ProductOverview productId={this.state.productId} />
        <QuestionsAnswersState
          productId={this.state.productId}
        />
        <Reviews props={this.state} />
>>>>>>> 7508ff1e0f08ec32f67ece20d5e2cc5e1d6b53cf
      </div>

    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
