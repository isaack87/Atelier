import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
import SearchBar from './components/questionsAnswers/searchBar.jsx';
import QuestionsAnswersState from './components/questionsAnswers/QuestionAnswerState.jsx';
import ProductOverview from './components/productDetails/OverviewMain.jsx';
import { ProductMainStateProvider } from './components/questionsAnswers/productState.jsx';

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

  random(cb) {
    let number = Math.floor(Math.random() * (28230 - 28212) + 28212);
    this.setState({
      productId: number,
    }, () => {
      console.log('product id changed to: ', this.state.productId);
      cb();
    });
  }

  render() {
    return (
      <div className="App-container">
        <h1>FEC PROJECT</h1>
        <div className='navigationBar'>
          <ul className='navigation navigation1'>
            <li><a href="/">Logo ⍙</a></li>
          </ul>
          <ul className='navigation navigation2'>
            <li><a href="http://www.google.com">_________ 🔍 </a></li>
          </ul>
        </div>
        <div className='announce'>
          <p><i>SIDE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></p>
        </div>

        <ProductMainStateProvider productId ={this.state.productId}>
          <ProductOverview productId={this.state.productId} random={this.random.bind(this)}/>
          <QuestionsAnswersState productId={this.state.productId} />
          <Reviews props={this.state} />
        </ProductMainStateProvider>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
