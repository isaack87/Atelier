import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/reviews.jsx'

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
      <div>
        <h1>test</h1>
         <Reviews props = {this.state}/>
      </div>
     

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
