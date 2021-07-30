import React from 'react';

class StyleSelector extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  // if state is defined then render
  render() {

    console.log('🔶this.state.styles selector', this.props.styles)

    return (
      <div className='styleSelector'>
        <div>
          STYLE > SELECTED STYLE
          <ul>
            <li>Color 1</li>
            <li>Color 2</li>
            <li>Color 3</li>
            <li>Color 4</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default StyleSelector;