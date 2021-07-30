import React from 'react';

class AddToCart extends React.Component {

  render() {
    return (
      <div className='addToCart'>
        <form>
          <select defaultValue={'DEFAULT'} required>
            <option value='DEFAULT' disabled>SELECT SIZE</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
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