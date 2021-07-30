import React from 'react';

class ProductDescription extends React.Component {

  render() {
    let info = this.props.productInfo;

    return (
      <div className="descriptionParent">
        <div className='descriptionChild1'>
          <div><b>{info.slogan}</b></div>
          <p>{info.description}</p>
        </div>
        <div className='descriptionChild2'>
          <ul>
            {this.props.features.map((item, index) => (
      <li key={index}>✓ {item.feature} - {item.value}</li>
    ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProductDescription;
