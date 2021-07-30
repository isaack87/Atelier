import React from 'react';

class Carousel extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      current: 0,
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }


  nextSlide() {
    const length = 5;
    let placeholder = this.state.current + 1;
    if (this.state.current === length - 1) {
      this.setState({
        current: 0,
      })
    } else {
      this.setState({
        current: placeholder,
      })
    }
  };

  prevSlide() {
    const length = 5;
    let first = length - 1;
    let second = this.state.current - 1;
    if (this.state.current === 0) {
      this.setState({
        current: first,
      })
    } else {
      this.setState({
        current: second,
      })
    }
  };

  render() {

    const SliderData = [
      {
        image:
          'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        image:
          'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        image:
          'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        image:
          'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        image:
          'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      }
    ];

    return (
      <div className='carouselContainer'>


        <div className='carouselChild1'>
        {SliderData.map((slide, index) => {
          return (
            <div key={index}>
                <img src={slide.image} className='imageThumb' />
            </div>
          );
        })}
        </div>

        <div className='carouselChild2'>
          <button className='left-arrow' onClick={this.prevSlide}>◀</button>
          <button className='right-arrow' onClick={this.nextSlide}>▶︎</button>
          {SliderData.map((slide, index) => {
            return (
              <div
              className={index === this.state.current ? 'slide active' : 'slide'}
              key={index}
              >
                {index === this.state.current && (
                  <img src={slide.image} className='image' />
                  )}
              </div>
            );
          })}
        </div>

      </div>
    );
  }
};

export default Carousel;