import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderQuantity(event) {
    this.props.renderQuantity(event.currentTarget.value);
    const tooltip = document.getElementsByClassName('tooltiptext')[0];
    tooltip.style.visibility = 'hidden';
  }

  addToCart() {
    const OpenSelectMenu = (element, maxSize) => {
      const preventDefault = (event) => {
        event.preventDefault();
        event.stopPropagation();
      };

      let isOpen = false;

      const open = function() {
        if (!isOpen) {
          element.size = maxSize;
          element.removeEventListener('mousedown', preventDefault);
          element.focus();
          isOpen = true;
        }
      };

      const close = () => {
        if (isOpen) {
          element.size = 1;
          element.addEventListener('mousedown', preventDefault);
          isOpen = false;
        }
      };
      element.addEventListener('mousedown', preventDefault);
      element.addEventListener('blur', close);
      element.addEventListener('click', () => {
        if (isOpen) {
          close();
        } else {
          open();
        }
      });

      return { open: open, close: close };
    };

    const selectedSize = document.getElementById('selectedSize').value;
    const selectedQuantity = document.getElementById('selectedQuantity').value;
    const skuId = document.getElementById('selectedSize').options[document.getElementById('selectedSize').selectedIndex].id;

    if (selectedSize !== 'DEFAULT') {
      if (selectedQuantity !== 'DEFAULT') {
        this.props.onAddToCart(skuId, selectedSize, selectedQuantity);
      }
    } else if (selectedSize === 'DEFAULT') {
      OpenSelectMenu(document.getElementById('selectedSize'), 3).open();
      const tooltip = document.getElementsByClassName('tooltiptext')[0];
      tooltip.style.visibility = 'visible';
    }
  }

  favorite() {
    console.log('added to favorites');
  }

  render() {
    let sizeArray;

    if (this.props.skuIds[0] === 'null') {
      sizeArray =
        <select className='selectedSize' onChange={this.renderQuantity.bind(this)} defaultValue={'DEFAULT'} disabled>
          <option disabled>OUT OF STOCK!</option>;
          {sizeArray}
        </select>;
      const tooltip = document.getElementsByClassName('cartButton')[0];
      tooltip.style.visibility = 'hidden';
    } else {
      sizeArray =
        <select className='selectedSize' onChange={this.renderQuantity.bind(this)} id='selectedSize' defaultValue={'DEFAULT'} required>
          <option value='DEFAULT' disabled>SELECT SIZE</option>
          {this.props.skuCounts.map((item, index) => (
            <option key={index} id={this.props.skuIds[index]}>{item.size}</option>
          ))}
        </select>;
    }

    let quantityArray;
    if (!this.props.currentQuantity) {
      quantityArray =
      <select className='selectQuantity' name="selectquantity" defaultValue={'DEFAULT'} disabled>
        <option disabled> - </option>
      </select>;
    } else if (this.props.currentQuantity <= 15) {
      const quantityCount = [];
      for (let i = 0; i < this.props.currentQuantity; i++) {
        quantityCount.push(i);
      }
      quantityArray = <select className='selectQuantity' name="selectquantity" id='selectedQuantity' defaultValue='DEFAULT' required>
        <option value='DEFAULT' disabled> - </option>
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
      </select>;
    } else if (this.props.currentQuantity >= 15) {
      const quantityCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      quantityArray = <select className='selectQuantity' name="selectquantity" id='selectedQuantity' defaultValue='DEFAULT' required>
        <option value='DEFAULT' disabled> - </option>
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
      </select>;
    }

    return (
      <div className='addToCart'>
        <form>
          <div className='tooltip'>
            <span className='tooltiptext'>Please select a size</span>
          </div>
          <div className='selectChoices'>
            {sizeArray}
            {quantityArray}
          </div>
          <br></br>
          <div className='selectChoices'>
            <button type='button' id='userCart' className='cartButton' onClick={this.addToCart.bind(this)}>ADD TO BAG</button>
            <button className='favoriteButton' type='button' onClick={this.favorite.bind(this)}>★</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddToCart;