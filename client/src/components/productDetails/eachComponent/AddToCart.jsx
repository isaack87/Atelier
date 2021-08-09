import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderQuantity(event) {
    this.props.renderQuantity(event.currentTarget.value);
  }

  render() {
    let mappedArray;
    // out of stock id: 28221
    if (this.props.skuIds[0] === 'null') {
      mappedArray =
        <option disabled>OUT OF STOCK!</option>;
    } else {
      mappedArray = this.props.skuCounts.map((item, index) => (
        <option id={this.props.skuIds[index]} key={index}>{item.size}</option>
      ));
    }

    let quantityArray;
    if (this.props.currentQuantity === 0) {
      quantityArray = <select name="selectquantity" disabled>
        <option> - </option>
      </select>;
    } else if (this.props.currentQuantity <= 15) {
      const quantityCount = [];
      for (let i = 0; i < this.props.currentQuantity; i++) {
        quantityCount.push(i);
      }
      quantityArray = <select name="selectquantity">
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
      </select>;
    } else if (this.props.currentQuantity >= 15) {
      const quantityCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      quantityArray = <select name="selectquantity">
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
      </select>;
    }

    return (
      <div className='addToCart'>
        <form>
          <select onChange={this.renderQuantity.bind(this)} defaultValue={'DEFAULT'} required>
            <option value='DEFAULT' disabled>SELECT SIZE</option>
            {mappedArray}
          </select>
          {quantityArray}
          <button>ADD TO BAG +</button>
          <button>★</button>
        </form>
      </div>
    );
  }
}

export default AddToCart;