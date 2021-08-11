import React from 'react';
import $ from 'jquery';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  updateStyleId(event) {
    let clickedClass = event.currentTarget.src.slice(34, 85);
    let checkMark = event.currentTarget.src.slice(34, 90);
    if (event.target.id !== this.props.currentStyleIndex) {
      this.props.changeStyleId(event.target.id, clickedClass, checkMark)
    }
    this.setState({
      current: event.currentTarget.id,
    })
  }

  render() {

    const mappedArray = this.props.styleNames.map((item, index) => {
      let classes = this.props.thumbnails[index].slice(34, 85) + " styleThumbnail";
      return <li className="removeBullets" key={index}><img className={classes} id={index} value={this.props.styleIds[index]} onClick={this.updateStyleId.bind(this)} src={this.props.thumbnails[index]} title={item}/><div class={this.props.thumbnails[index].slice(34, 90)}></div></li>
    })

    let currentStyleName = this.props.styleNames[this.state.current];

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
          <b>STYLE ></b> {currentStyleName}
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