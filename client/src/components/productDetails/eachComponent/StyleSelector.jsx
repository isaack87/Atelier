import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import AddToCart from './AddToCart.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleIdIndex: 0,
      currentStyleId: 162337,
      styleNames: ['placeholder data'],
      thumbnails: [],
      styleIds: [],
      skus: [],
      skuIds: [],
      skuCounts: [],
      currentSize: "XS",
    }
    this.getDataFromProductIdStyle = this.getDataFromProductIdStyle.bind(this);
  }

  componentDidMount() {
    this.getDataFromProductIdStyle(this.props.productId);
  }

  getDataFromProductIdStyle(productId) {
    axios({
      method: 'get',
      url: `http://localhost:3000/product/styles?pid=${productId}`,
    })
      .then((response) => {
        // console.log('😵 productId', response);
        // console.log('💩',response.data.results)
        let names = response.data.results.map((item) => ( item.name ))
        let thumbnails = response.data.results.map((item) => (
          item.photos[0].thumbnail_url
        ))
        let styleIds = response.data.results.map((item) => ( item.style_id ))
        let skusObject = response.data.results[0].skus
        let skuIds = [];
        let skuCounts = [];
        for (let key in skusObject) {
          skuIds.push(key)
          skuCounts.push(skusObject[key])
        }
        this.setState({
          styleNames: names,
          thumbnails: thumbnails,
          skus: [response.data.results[0].skus],
          skuIds: skuIds,
          skuCounts: skuCounts,
          styleIds: styleIds,
        })
        // console.log('🤢', response.data.results[0]);
      })
      .catch((error) => {
        console.log('Error in getting data from ProductID Styles', error);
      });
  }

  changeStyleId(event) {
    let currentNumber = event.target.id;
    axios({
      method: 'get',
      url: `http://localhost:3000/product/styles?pid=${this.props.productId}`,
    })
      .then((response) => {
        let skusObject = response.data.results[currentNumber].skus
        let skuIds = [];
        let skuCounts = [];
        for (let key in skusObject) {
          skuIds.push(key)
          skuCounts.push(skusObject[key])
        }
        this.setState({
          skus: [response.data.results[currentNumber].skus],
          skuIds: skuIds,
          skuCounts: skuCounts,
          currentStyleId: response.data.results[currentNumber].style_id,
        })
        // console.log(this.state.currentStyleId)
        this.props.onChangeMainPageStyle(response.data.results[currentNumber].style_id);
      })
      .catch((error) => {
        console.log('Error in getting data from ProductID Styles', error);
      });

    this.setState({
      currentStyleIdIndex: event.target.id,
    }, () => {
      // console.log('current id', this.state.currentStyleIdIndex)
    })
  }

  render() {

    const mappedArray = this.state.styleNames.map((item, index) => (
      <li className="removeBullets" key={index}><img className="styleThumbnail" id={index} value={this.state.styleIds[index]} onClick={this.changeStyleId.bind(this)} src={this.state.thumbnails[index]} title={item}/></li>
      ))
    let thumbnailArray1 = [];
    let thumbnailArray2 = [];
    let thumbnailArray3 = [];
    for (let i = 0; i < mappedArray.length; i++) {
      if (thumbnailArray1.length < 4) {
        thumbnailArray1.push(mappedArray[i])
      } else if (thumbnailArray2.length < 4) {
        thumbnailArray2.push(mappedArray[i])
      } else if (thumbnailArray3.length < 4) {
        thumbnailArray3.push(mappedArray[i])
      }
    }

    return (
      <div className='styleSelector'>
        <div>
          <b>STYLE ></b> SELECTED STYLE
          <ul className="thumbnailContainer">
            {thumbnailArray1}
          </ul>
          <ul className="thumbnailContainer">
            {thumbnailArray2}
          </ul>
          <ul className="thumbnailContainer">
            {thumbnailArray3}
          </ul>
        </div>
        <AddToCart skus={this.state.skus} skuIds={this.state.skuIds} skuCounts={this.state.skuCounts}/>

      </div>
    )
  }
}

export default StyleSelector;