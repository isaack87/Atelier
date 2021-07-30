import React from 'react';
import ReactDOM from 'react-dom';
import ProductOverview from './components/productDetails/products.jsx'
import $ from 'jquery';

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
      <div>Hello World
        <ProductOverview productId={this.state.productId}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
