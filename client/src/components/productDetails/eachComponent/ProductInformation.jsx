import React from 'react';
import $ from 'jquery';

class ProductInformation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    let displayPrice;
    if (this.props.allResultsArray[this.props.currentStyleIndex]) {
      if (this.props.allResultsArray[this.props.currentStyleIndex].sale_price) {
        displayPrice = <div><del>$ {this.props.allResultsArray[this.props.currentStyleIndex].original_price}</del> SALE!! <span className='salePrice'>$ {this.props.allResultsArray[this.props.currentStyleIndex].sale_price}</span></div>;
      } else {
        displayPrice = <div>$ {this.props.allResultsArray[this.props.currentStyleIndex].original_price}</div>;
      }
    }

    return (
      <div className='productInformation'>
        <div>
          ✭ ✭ ✭ ✭ ✭ <u>Read all reviews</u>
        </div>
        <div>{this.props.productInfo.category}</div>
        <div><b>{this.props.productInfo.name}</b></div>
        {displayPrice}
      </div>
    );
  }
}

export default ProductInformation;
