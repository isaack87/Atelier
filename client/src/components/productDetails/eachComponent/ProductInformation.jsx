import React from 'react';
import $ from 'jquery';

class ProductInformation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {


    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/productdetails',
  //     type: 'POST',
  //     data: {id: 28212},
  //     success: (data) => {
  //       this.setState({
  //         productInfo: data,
  //         features: data.features,
  //       })
  //       // console.log(this.state.productInfo)
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  render() {
    let info = this.state.productInfo;

    return (
      <div className='productInformation'>
        <div>
          ✭ ✭ ✭ ✭ ✭ <u>Read all reviews</u>
        </div>
        <div>{this.props.productInfo.category}</div>
        <div><b>{this.props.productInfo.name}</b></div>
        <div>${this.props.productInfo.default_price}</div>
      </div>
    )
  }
}

export default ProductInformation;