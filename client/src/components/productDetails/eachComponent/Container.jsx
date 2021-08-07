import React from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import $ from 'jquery';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedStyleId: 162332,
      current: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.getNewID();
  }

  nextSlide(){
    const length = this.props.fullSizePhotos.length;
    let placeholder = this.state.current + 1;
    if (this.state.current === length - 1) {
      this.setState({
        current: 0,
      })
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

  getNewID() {
    axios({
      method: 'get',
      url: `http://localhost:3000/product/styles?pid=${this.props.productId}`,
    })
      .then((response) => {
        // console.log('😵 productId yay', response);
        this.setState({
          currentSelectedStyleId: response.data.results[0].style_id,
        }, () => {
          // console.log('has it been changed', this.state.currentSelectedStyleId)
        });
      })
      .catch((error) => {
        console.log('Error in getting data from ProductID Styles', error);
      });
  }

  // changeMainPageStyle(passInStyleId) {
  //   this.props.changeMainPageStyle(passInStyleId);
  // }

  render() {
    return (
      <div>

        <div className='containerChild1'>
          <div className='carouselContainer'>
            <div className='carouselChild1'>
              {this.props.fullSizePhotos.map((slide, index) => {
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
                    {index === this.state.current && ( <img src={slide} className='image'/>)}
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

export default Container;
