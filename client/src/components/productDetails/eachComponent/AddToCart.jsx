import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSize: "XS",
      currentQuantity: 0,
    };
  }

  renderQuantity(event) {
    const currentSize = event.currentTarget.value;
    let totalQuantity;
    for (let i = 0; i < this.props.skuCounts.length; i++) {
      if (this.props.skuCounts[i].size === currentSize) {
        totalQuantity = this.props.skuCounts[i].quantity
      }
    }
    this.setState({
      currentSize: currentSize,
      currentQuantity: totalQuantity,
    });
  }

  render() {
    const mappedArray = this.props.skuCounts.map((item, index) => (
      <option id={this.props.skuIds[index]} key={index}>{item.size}</option>
    ))

    let quantityArray;

    if (this.state.currentQuantity === 0) {
      quantityArray = <select name="selectquantity" disabled>
      <option> - </option>
     </select>
    } else if (this.state.currentQuantity < 15) {
      const quantityCount = [];
      for (let i = 0; i < this.state.currentQuantity; i++) {
        quantityCount.push(i);
      }
      quantityArray = <select name="selectquantity">
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
     </select>
    } else if (this.state.currentQuantity > 15) {
      const quantityCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      quantityArray = <select name="selectquantity">
        {quantityCount.map((item, index) => (
          <option key={index}> {index + 1} </option>
        ))}
     </select>
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
    )
  }
}

export default AddToCart;
