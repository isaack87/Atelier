import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ratingsReviews/ratings.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      user: '',
      stars: '',
      reportedArray: [],
    };
  }
  render() {
    return (
      <div>Hello World
        <Reviews props={this.state}/>
      </div>
    
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
