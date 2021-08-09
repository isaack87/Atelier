import React from 'react';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    const length = this.props.fullSizePhotos.length;
    let placeholder = this.state.current + 1;
    if (this.state.current === length - 1) {
      this.setState({
        current: 0,
      });
    } else {
      this.setState({
        current: placeholder,
      });
    }
  }

  prevSlide() {
    const length = this.props.fullSizePhotos.length;
    let first = length - 1;
    let second = this.state.current - 1;
    if (this.state.current === 0) {
      this.setState({
        current: first,
      });
    } else {
      this.setState({
        current: second,
      });
    }
  }

  render() {
    return (
      <div>
        <div className='containerChild1'>
          <div className='carouselContainer'>

            <div className='carouselChild1'>
              {this.props.smallSizePhotos.map((slide, index) => {
                return (
                  <div key={index}>
                    <img src={slide} className='imageThumb' />
                  </div>
                );
              })}
            </div>

            <div className='carouselChild2'>
              <button className='left-arrow' onClick={this.prevSlide}>◀</button>
              <button className='right-arrow' onClick={this.nextSlide}>▶︎</button>
              {this.props.fullSizePhotos.map((slide, index) => {
                return (
                  <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
                    {index === this.state.current && (<img src={slide} className='image'/>)}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

    );
  }
}

export default Carousel;
