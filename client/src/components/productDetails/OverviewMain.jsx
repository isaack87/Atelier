import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import ProductDescription from './eachComponent/ProductDescription.jsx';
import Container from './eachComponent/Container.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: { placeholder: 'no data yet' },
      features: ['No data yet'],
      currentSelectedStyleId: 162332,
    };
    this.getDataFromProductId = this.getDataFromProductId.bind(this);
    this.getDataFromProductIdStyle = this.getDataFromProductIdStyle.bind(this);
  }

  componentDidMount() {
    this.getDataFromProductId(this.props.productId);
    this.getDataFromProductIdStyle(this.props.productId);
  }

  getDataFromProductId(productId) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/productdetails',
      data: { id: productId },
    })
      .then((response) => {
        this.setState({
          productInfo: response.data,
          features: response.data.features,
        });
      })
      .catch((error) => {
        console.log('Error in getting data from step 1, ProductID', error);
      });
  }

  getDataFromProductIdStyle(productId) {
    axios({
      method: 'get',
      url: `http://localhost:3000/product/styles?pid=${productId}`,
    })
      .then((response) => {
        // console.log('😵 productId yay', response);
        this.setState({
          currentSelectedStyleId: response.data.results[0].style_id,
        });
      })
      .catch((error) => {
        console.log('Error in getting data from ProductID Styles', error);
      });
  }

  changeMainPageStyle(passInStyleId) {
    // console.log('changeMainPageStyle has been called', passInStyleId)
    this.setState({
      currentSelectedStyleId: passInStyleId,
    });
  }

  render() {
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

        <Container currentSelectedStyleId={this.state.currentSelectedStyleId} productId={this.props.productId} productInfo={this.state.productInfo}/>

        <ProductDescription productInfo={this.state.productInfo} features={this.state.features}/>

      </div>
    );
  }
}

export default ProductOverview;
