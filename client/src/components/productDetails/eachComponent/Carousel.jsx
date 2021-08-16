import React from 'react';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      currentPage: 1,
      listTwoCurrent: 0,
      screenSize: 'normal',
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    const length = this.props.fullSizePhotos.length;
    let placeholder = this.state.current + 1;
    if (this.state.current === length - 1) {
      this.setState({
        current: this.state.current,
      });
    } else if (this.state.current < 6) {
      document.getElementsByClassName('imageThumb')[this.state.current].classList.remove('selectedThumbnail');
      document.getElementsByClassName('imageThumb')[this.state.current + 1].classList.add('selectedThumbnail');
      this.setState({
        current: placeholder,
      });
    } else if (this.state.current === 6) {
      document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.remove('selectedThumbnail');
      this.setState({
        currentPage: 2,
        current: placeholder,
      }, () => {
        document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.add('selectedThumbnail');
      });
    } else if (this.state.current > 6) {
      let newCurrent = this.state.current + 1;
      let listTwoIndex = this.state.listTwoCurrent + 1;
      document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.remove('selectedThumbnail');
      this.setState({
        listTwoCurrent: listTwoIndex,
        current: newCurrent,
      }, () => {
        document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.add('selectedThumbnail');
      });
    }
  }

  prevSlide() {
    const length = this.props.fullSizePhotos.length;
    let first = length - 1;
    let second = this.state.current - 1;
    if (this.state.current === 0) {
      this.setState({
        current: this.state.current,
      });
    } else if (this.state.currentPage === 2 && this.state.listTwoCurrent !== 0) {
      let newCurrent = this.state.current - 1;
      let listTwoIndex = this.state.listTwoCurrent - 1;
      document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.remove('selectedThumbnail');
      this.setState({
        listTwoCurrent: listTwoIndex,
        current: newCurrent,
      }, () => {
        document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.add('selectedThumbnail');
      });
    } else if (this.state.currentPage === 2 && this.state.listTwoCurrent === 0) {
      let newCurrent = this.state.current - 1;
      let listTwoIndex = this.state.listTwoCurrent - 1;
      document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.remove('selectedThumbnail');
      this.setState({
        currentPage: 1,
        current: newCurrent,
        listTwoCurrent: 0,
      }, () => {
        document.getElementsByClassName('imageThumb')[this.state.current].classList.add('selectedThumbnail');
      });
    } else {
      document.getElementsByClassName('imageThumb')[this.state.current].classList.remove('selectedThumbnail');
      document.getElementsByClassName('imageThumb')[this.state.current - 1].classList.add('selectedThumbnail');
      this.setState({
        current: second,
      });
    }
  }

  nextSetOfThumbnails() {
    if (this.state.currentPage === 1) {
      document.getElementsByClassName('imageThumb')[this.state.current].classList.remove('selectedThumbnail');
      this.setState({
        currentPage: 2,
        current: 7,
        listTwoCurrent: 0,
      }, () => {
        document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.add('selectedThumbnail');
      });
    } else if (this.state.currentPage === 2) {
      document.getElementsByClassName('imageThumb')[this.state.listTwoCurrent].classList.remove('selectedThumbnail');
      this.setState({
        currentPage: 1,
        current: 6,
        listTwoCurrent: 0,
      }, () => {
        document.getElementsByClassName('imageThumb')[this.state.current].classList.add('selectedThumbnail');
      });
    }
  }

  changeFullscreen() {
    if (this.state.screenSize === 'normal') {
      document.getElementsByClassName('photoCarouselChild')[0].classList.remove('carouselChild2');
      document.getElementsByClassName('photoCarouselChild')[0].classList.add('fullScreenCarousel');

      document.getElementsByClassName('changePhotoToFull')[0].classList.remove('mainPhotoImage');
      document.getElementsByClassName('changePhotoToFull')[0].classList.add('fullscreenMainPhotoImage');
      console.log('this is it', document.getElementsByClassName('changePhotoToFull')[0])
      this.setState({
        screenSize: 'full',
      });
    } else if (this.state.screenSize === 'full') {
      document.getElementsByClassName('photoCarouselChild')[0].classList.remove('fullScreenCarousel');
      document.getElementsByClassName('photoCarouselChild')[0].classList.add('carouselChild2');

      document.getElementsByClassName('changePhotoToFull')[0].classList.remove('fullscreenMainPhotoImage');
      document.getElementsByClassName('changePhotoToFull')[0].classList.add('mainPhotoImage');
      this.setState({
        screenSize: 'normal',
      });
    }
  }

  changeMainPhoto(event) {
    const clickedIndex = parseInt(event.currentTarget.id);
    // remove marker from current selected thumbnail and add to newly clicked one
    document.getElementsByClassName('imageThumb')[this.state.current].classList.remove('selectedThumbnail');
    event.currentTarget.classList.add('selectedThumbnail');

    this.setState({
      current: clickedIndex,
    });
  }


  // Opening and closing Modal =========================
  zoomIn() {
    // for modal
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById('img01');

    modal.style.display = 'block';
    modalImg.src = this.props.fullSizePhotos[this.state.current];
  }

  closeZoom() {
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById('img01');

    modal.style.display = 'none';
    modalImg.src = '';
  }
  // =====================================================

  zoomTwoTimes() {
    console.log('clicked')

  }

  render() {
    let mainImage;

    if (this.state.screenSize === 'normal') {
      mainImage = <img onClick={this.changeFullscreen.bind(this)} src={this.props.fullSizePhotos[this.state.current]} id='myImg' className='changePhotoToFull mainPhotoImage'/>;
    } else if (this.state.screenSize === 'full') {
      mainImage = <img onClick={this.zoomTwoTimes.bind(this)} id='myImg' src={this.props.fullSizePhotos[this.state.current]} className='changePhotoToFull fullscreenMainPhotoImage'/>;
    }

    let first7Pics;
    let secondSetPics;
    let currentThumbnails;

    if (this.props.smallSizePhotos.length <= 7) {
      currentThumbnails = this.props.smallSizePhotos.map((slide, index) => {
        return (
          <img key={index} onClick={this.changeMainPhoto.bind(this)} src={slide} className='imageThumb' id={index} />
        );
      });
    } else if (this.state.currentPage === 1) {
      first7Pics = this.props.smallSizePhotos.slice(0, 7);
      currentThumbnails = first7Pics.map((slide, index) => {
        return (
          <img key={index} onClick={this.changeMainPhoto.bind(this)} src={slide} className='imageThumb' id={index} />
        );
      });
    } else if (this.state.currentPage === 2) {
      secondSetPics = this.props.smallSizePhotos.slice(7, 14);
      currentThumbnails = secondSetPics.map((slide, index) => {
        return (
          <img key={index} onClick={this.changeMainPhoto.bind(this)} src={slide} className='imageThumb' id={index + 7} />
        );
      });
    }

    let leftArrow = <button className='left-arrow' onClick={this.prevSlide}>◀</button>;
    let rightArrow = <button className='right-arrow' onClick={this.nextSlide}>▶︎</button>;
    let downArrow = <button className='downArrow' onClick={this.nextSetOfThumbnails.bind(this)}>▼</button>;
    if (this.state.current === 0) {
      leftArrow = <button className='left-arrow' style={{visibility: 'hidden'}} onClick={this.prevSlide}>◀</button>;
    } else if (this.state.current === this.props.fullSizePhotos.length - 1) {
      rightArrow = <button className='right-arrow' style={{visibility: 'hidden'}} onClick={this.prevSlide}>▶︎</button>;
    }
    if (this.props.smallSizePhotos.length <= 7) {
      downArrow = <button style={{visibility: 'hidden'}} className='downArrow' onClick={this.nextSetOfThumbnails.bind(this)}>▼</button>;
    }

    return (
      <div className='carouselContainer' >

        <div className='carouselChild1'>
          <div className='thumbnailDownLine'>
            {currentThumbnails}
          </div>
          <div className='centerDownArrow'>
            {downArrow}
          </div>
        </div>

        <div className='photoCarouselChild carouselChild2'>
          {leftArrow}

          {mainImage}

          {/* <div id="myModal" class="overviewmodal">
            <span onClick={this.closeZoom.bind(this)} class="closeOverviewImage">&times;</span>
            <img onClick={this.zoomTwoTimes.bind(this)} class="modal-content" id="img01"/>
          </div> */}

          {rightArrow}

        </div>

        <div onClick={this.changeFullscreen.bind(this)} className='fullscreenButton' title='Expand'>✚
        </div>
      </div>
    );
  }
}

export default Carousel;
