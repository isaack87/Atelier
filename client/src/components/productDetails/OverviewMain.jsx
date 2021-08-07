import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import ProductDescription from './eachComponent/ProductDescription.jsx';
import ProductInformation from './eachComponent/ProductInformation.jsx';
import StyleSelector from './eachComponent/StyleSelector.jsx';
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
    // this.getDataFromProductIdStyle = this.getDataFromProductIdStyle.bind(this);
    this.renderPhotos = this.renderPhotos.bind(this);
  }

  componentDidMount() {
    this.getDataFromProductId(this.props.productId);
    // this.getDataFromProductIdStyle(this.props.productId);
    this.renderPhotos(this.props.productId, this.state.currentSelectedStyleId);
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


  renderPhotos(productId, styleId) {
    axios({
      method: 'get',
      url: `http://localhost:3000/product/styles?pid=${productId}`,
    })
      .then((response) => {
        const fullPhotos = [];
        const smallPhotos = [];
        // console.log('current id', this.props.currentSelectedStyleId)
        for (let i = 0; i < response.data.results.length; i++) {
          // console.log(response.data.results[i].style_id)
          if (response.data.results[i].style_id === styleId) {
            for (let j = 0; j < response.data.results[i].photos.length; j++) {
              fullPhotos.push(response.data.results[i].photos[j].url);
              smallPhotos.push(response.data.results[i].photos[j].thumbnail_url);
            }
          }
        }
        return [fullPhotos, smallPhotos];
      })
      .then((response) => {
        // console.log(response)
        this.setState({
          fullSizePhotos: response[0],
          smallSizePhotos: response[1],
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
    }, () => {
      // console.log('after setting state', this.state.currentSelectedStyleId)
      this.renderPhotos(this.props.productId, this.state.currentSelectedStyleId)
    });
  }

  render() {
    return (
      <div className='products overviewContainer'>

        <div className='containerProducts'>
        <Container fullSizePhotos={this.state.fullSizePhotos} smallSizePhotos={this.state.smallSizePhotso} currentSelectedStyleId={this.state.currentSelectedStyleId} productId={this.props.productId} productInfo={this.state.productInfo} changeMainPageStyle={this.changeMainPageStyle.bind(this)} />

        <div className='containerChild2'>
          <ProductInformation productInfo={this.state.productInfo}/>
          <StyleSelector productId={this.props.productId} onChangeMainPageStyle={this.changeMainPageStyle.bind(this)}/>
        </div>

        </div>

        <ProductDescription productInfo={this.state.productInfo} features={this.state.features} />

      </div>
    );
  }
}

export default ProductOverview;
