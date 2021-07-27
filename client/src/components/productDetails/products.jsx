import React from 'react';
import ProductInformation from './eachComponent/ProductInformation.jsx';
import Carousel from './eachComponent/Carousel.jsx';
import StyleSelector from './eachComponent/StyleSelector.jsx';
import AddToCart from './eachComponent/AddToCart.jsx';
import ProductDescription from './eachComponent/ProductDescription.jsx';

class ProductOverview extends React.Component {

  render() {
    return (
      <div class='products'>
        <Carousel />
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
        <ProductDescription />
      </div>
    );
  }
}

export default ProductOverview;
