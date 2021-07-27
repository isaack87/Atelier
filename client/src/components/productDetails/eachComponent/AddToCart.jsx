import React from 'react';

class AddToCart extends React.Component {

  render() {
    return (
      <div class='addToCart'>
        <form>
          <select name="selectSize" required>
            <option value="" disabled selected>SELECT SIZE</option>
          </select>
          <select name="selectquantity" required>
            <option>1</option>
          </select>
          <button>ADD TO BAG +</button>
          <button>★</button>
        </form>
    </div>
    )
  }
}

export default AddToCart;
