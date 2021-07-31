import React from 'react';

class AddToCart extends React.Component {

  render() {
    const mappedArray = this.props.skuCounts.map((item, index) => (
      <option id={this.props.skuIds[index]} key={index}>{item.size}</option>
    ))
    console.log(mappedArray)
    return (
      <div className='addToCart'>
        <form>
          <select defaultValue={'DEFAULT'} required>
            <option value='DEFAULT' disabled>SELECT SIZE</option>
            {mappedArray}
          </select>
          <select name="selectquantity" required>
            <option>1</option>
            <option>2</option>
          </select>
          <button>ADD TO BAG +</button>
          <button>★</button>
        </form>
    </div>
    )
  }
}

export default AddToCart;