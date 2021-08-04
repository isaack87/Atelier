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
      fullSizePhotos: [],
      smallSizePhotos: [],
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.renderPhotos = this.renderPhotos.bind(this);
  }

  componentDidMount() {
    this.getNewID();
    this.renderPhotos(this.props.productId, this.state.currentSelectedStyleId);
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

  nextSlide(){
    const length = this.state.smallSizePhotos.length;
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
    const length = this.state.smallSizePhotos.length;
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
      <div className='containerProducts'>

        <div className='containerChild1'>
          <div className='carouselContainer'>
            <div className='carouselChild1'>
              {this.state.fullSizePhotos.map((slide, index) => {
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
              {this.state.fullSizePhotos.map((slide, index) => {
                return (
                  <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
                    {index === this.state.current && ( <img src={slide} className='image'/>)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='containerChild2'>
          <ProductInformation productInfo={this.props.productInfo}/>
          <StyleSelector productId={this.props.productId} onChangeMainPageStyle={this.changeMainPageStyle.bind(this)}/>
        </div>

      </div>

    );
  }
}

export default Container;
