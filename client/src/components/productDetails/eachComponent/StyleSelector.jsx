import React from 'react';
import $ from 'jquery';
import AddToCart from './AddToCart.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleId: 162348,
      styleNames: ['placeholder data'],
      thumbnails: [],
      skus: [],
      skuIds: [],
      skuCounts: [],
    }
  }

  componentDidMount() {
    $.ajax({
      url: `/product/styles?pid=${this.props.productId}`,
      type: 'GET',
      success: (response) => {
        console.log(response)
        let names = response.results.map((item) => ( item.name ))
        let thumbnails = response.results.map((item) => (
          item.photos[0].thumbnail_url
        ))
        let skusObject = response.results[0].skus
        let skuIds = [];
        let skuCounts = [];
        for (let key in skusObject) {
          skuIds.push(key)
          skuCounts.push(skusObject[key])
        }
        this.setState({
          styleNames: names,
          thumbnails: thumbnails,
          skus: [response.results[0].skus],
          skuIds: skuIds,
          skuCounts: skuCounts,
        })
        // console.log('🟣 this.state.styles', this.state.styles)
        // console.log('🔵 skus', this.state.skuCounts)
      },
      error: (err) => {
        console.log('👹 err', err)
      }
    })
  }

  changeStyleId() {

  }

  // if state is defined then render
  render() {

    const mappedArray = this.state.styleNames.map((item, index) => (
      <li className="removeBullets" key={index}><img className="styleThumbnail" src={this.state.thumbnails[index]} title={item}/></li>
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