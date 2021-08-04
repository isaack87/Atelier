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
      fullSizePhotos: [],
      smallSizePhotos: [],

    };
    this.getDataFromProductId = this.getDataFromProductId.bind(this);
    this.getDataFromProductIdStyle = this.getDataFromProductIdStyle.bind(this);
  }

  componentDidMount() {
    this.getDataFromProductId(this.props.productId);
    // this.getDataFromProductIdStyle();
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
        }, () => {
          this.getDataFromProductIdStyle();
        });
      })
      .catch((error) => {
        console.log('Error in getting data from step 1, ProductID', error);
      });
  }

  getDataFromProductIdStyle() {
    axios({
      method: 'get',
      url: `http://localhost:3000/product/styles?pid=${this.props.productId}`,
    })
      .then((response) => {
        const data = response.data.results;
        const fullPhotos = [];
        const smallPhotos = [];
        console.log(this.props.productId)
        console.log('current id', this.props.styleId)
        for (let i = 0; i < response.data.results.length; i++) {
          console.log(response.data.results[i].style_id)
          if (response.data.results[i].style_id === this.props.styleId) {
            for (let j = 0; j < response.data.results[i].photos.length; j++) {
              fullPhotos.push(response.data.results[i].photos[j].url);
              smallPhotos.push(response.data.results[i].photos[j].thumbnail_url);
            }
          }
        }
        return [fullPhotos, smallPhotos, response.data.results[0].style_id];
      })
      .then((response) => {
        this.setState({
          fullSizePhotos: response[0],
          smallSizePhotos: response[1],
          currentSelectedStyleId: response[2],
        }, () => {
          console.log(this.state.fullSizePhotos)
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
