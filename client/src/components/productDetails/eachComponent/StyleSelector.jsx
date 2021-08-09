import React from 'react';
import $ from 'jquery';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  updateStyleId(event) {
    this.props.changeStyleId(event.target.id)
  }

  render() {

    const mappedArray = this.props.styleNames.map((item, index) => (
      <li className="removeBullets" key={index}><img className="styleThumbnail" id={index} value={this.props.styleIds[index]} onClick={this.updateStyleId.bind(this)} src={this.props.thumbnails[index]} title={item}/></li>
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
    )
  }
}

export default StyleSelector;