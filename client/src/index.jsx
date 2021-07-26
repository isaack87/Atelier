import React from 'react';
import ReactDOM from 'react-dom';
import ProductOverview from './components/productDetails/products.jsx'

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
        <ProductOverview />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
