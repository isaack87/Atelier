import React from 'react';
import ProductInformation from './eachComponent/ProductInformation.jsx';
import StyleSelector from './eachComponent/StyleSelector.jsx';
import AddToCart from './eachComponent/AddToCart.jsx';
import ProductDescription from './eachComponent/ProductDescription.jsx';
import $ from 'jquery';
import Carousel from './eachComponent/Carousel.jsx';

class ProductOverview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productInfo: {placeholder: 3},
      features: ['No data yet'],
      styles: ['No data yet'],
      test: ['No data yet']

    }
    this.getDataFromProductId = this.getDataFromProductId.bind(this);
    this.getDataFromProductIdStyle = this.getDataFromProductIdStyle.bind(this);

  }

  componentDidMount() {
    this.getDataFromProductId();
    this.getDataFromProductIdStyle();
  }

  getDataFromProductId() {
    let idNumber = JSON.stringify(this.props.productId);
    $.ajax({
      url: '/productdetails',
      type: 'POST',
      data: { id: idNumber },
      success: (res) => {
        // console.log('🤡👻 Product ID data 1 ', res)
        this.setState({
          productInfo: res,
          features: res.features,
        });
      },
      error: (err) => {
        console.log('👹 err', err)
      }
    })
  }

  // getDataFromProductIdStyle() {
  //   let idNumber = JSON.stringify(this.props.productId);
  //   $.ajax({
  //     url: '/product/styles',
  //     type: 'POST',
  //     data: { id: idNumber },
  //     success: (res) => {
  //       // console.log('🤡👻 Product ID Styles data 1 ', res)
  //       this.setState({
  //         styles: res,
  //       })
  //       // console.log('🟣 this.state.styles', this.state.styles)
  //     },
  //     error: (err) => {
  //       console.log('👹 err', err)
  //     }
  //   })
  // }

  getDataFromProductIdStyle() {
    let idNumber = JSON.stringify(this.props.productId);
    $.ajax({
      url: `/product/styles?pid=${idNumber}`,
      type: 'GET',
      success: (res) => {
        console.log('🤡👻 Product ID Styles data 1 ', res)
        this.setState({
          styles: res,
        })
        // console.log('🟣 this.state.styles', this.state.styles)
      },
      error: (err) => {
        console.log('👹 err', err)
      }
    })
  }


  render() {

    let idNumber = this.props.productId;

    return (
      <div className='products'>

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

        <div className='containerProducts'>
          <div className='containerChild1'>
          <Carousel styles={this.state.styles}/>
          </div>

          <div className='containerChild2'>
          <ProductInformation productInfo={this.state.productInfo}/>
          <StyleSelector styles={this.state.styles}/>
          <AddToCart />
          </div>
        </div>

        <ProductDescription productInfo={this.state.productInfo} features={this.state.features}/>

      </div>
    );
  }
}

export default ProductOverview;