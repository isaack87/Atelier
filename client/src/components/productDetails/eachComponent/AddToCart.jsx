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
        <select onChange={this.renderQuantity.bind(this)} defaultValue={'DEFAULT'} disabled>
          <option disabled>OUT OF STOCK!</option>;
          {mappedArray}
        </select>;
    } else {
      mappedArray =
        <select onChange={this.renderQuantity.bind(this)} defaultValue={'DEFAULT'} required>
          <option value='DEFAULT' disabled>SELECT SIZE</option>
          {this.props.skuCounts.map((item, index) => (
            <option key={index} id={this.props.skuIds[index]}>{item.size}</option>
          ))}
        </select>;
    }

    let quantityArray;
    if (!this.props.currentQuantity) {
      quantityArray =
      <select name="selectquantity" defaultValue={'DEFAULT'} disabled>
        <option disabled> - </option>
      </select>;
    } else if (this.props.currentQuantity <= 15) {
      const quantityCount = [];
      for (let i = 0; i < this.props.currentQuantity; i++) {
        quantityCount.push(i);
      }
      quantityArray = <select name="selectquantity" defaultValue='DEFAULT'>
        <option value='DEFAULT' disabled> - </option>
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
      </select>;
    } else if (this.props.currentQuantity >= 15) {
      const quantityCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      quantityArray = <select name="selectquantity" defaultValue='DEFAULT'>
        <option value='DEFAULT' disabled> - </option>
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
      </select>;
    }

    return (
      <div className='addToCart'>
        <form>

            {mappedArray}

          {quantityArray}
          <button>ADD TO BAG +</button>
          <button>★</button>
        </form>
      </div>
    );
  }
}

export default AddToCart;