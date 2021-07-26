import React from 'react';

class ProductOverview extends React.Component {

  render() {
    return (
      <div class='products'>
        <div class='carousel'>
          <b>Placeholder for Image Caraousel box</b>
        </div>
        <div>CATEGORY</div>
        <div>EXPANDED PRODUCT NAME</div>
        <div>$369</div>
        <div>
          STYLE > SELECTED STYLE
          <ul>
            <li>Color 1</li>
            <li>Color 2</li>
            <li>Color 3</li>
          </ul>
        </div>
        <div>
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
        <div class="productDetails">
          <div>
            <div><b>Product Slogan. Pithy Description or Catchphrase</b></div>
            <p>Ice cream ice cream gummies marzipan gingerbread. Dragee cake pudding sugar plum bear claw icing. topping halvah marshmallow cake cupcake desert cotton candy. Cheesecake chocolate cake fruitcake marzipan tiramisu macaroon souffle. Carrot cake cheesecake apple pie chocolate.</p>
            <p>Tiramisu pie candy canes gummies lollipop cheesecake wafer gummi bears. Liqourice donut dragee oat cake. Tootsie roll gummies apple pie.</p>
          </div>
          <div>
            <ul>
              <li>✓ GME and Pesticide-free</li>
              <li>✓ Made with 100% Genetic Modification</li>
              <li>✓ This is made up</li>
              <li>✓ It doesn't matter</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
