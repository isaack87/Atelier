import React from 'react';

class ProductInformation extends React.Component {

  constructor (props) {
    super(props);
    this.state = {

    }

  }

  render() {
    let info = this.props.productInfo;

    return (
      <div className='productInformation'>
        <div>
          ✭ ✭ ✭ ✭ ✭ <u>Read all reviews</u>
        </div>
        <div>{info.category}</div>
        <div><b>{info.name}</b></div>
        <div>${info.default_price}</div>
      </div>
    )
  }
}

export default ProductInformation;