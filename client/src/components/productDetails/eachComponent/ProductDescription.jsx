import React from 'react';

class ProductDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="descriptionParent">
        <div className='descriptionChild1'>
          <div><b>{this.props.productInfo.slogan}</b></div>
          <p>{this.props.productInfo.description}</p>
        </div>
        <div className='descriptionChild2'>
          <ul className="removeBullets">
            {this.props.productInfo.features.map((item, index) => (
              <li key={index}>
              ✓ {item.feature} - {item.value}
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDescription;