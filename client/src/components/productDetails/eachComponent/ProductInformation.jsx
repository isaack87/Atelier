import React from 'react';
import $ from 'jquery';

class ProductInformation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className='productInformation'>
        <div>
          ✭ ✭ ✭ ✭ ✭ <u>Read all reviews</u>
        </div>
        <div>{this.props.productInfo.category}</div>
        <div><b>{this.props.productInfo.name}</b></div>
        <div>${this.props.productInfo.default_price}</div>
      </div>
    );
  }
}

export default ProductInformation;
