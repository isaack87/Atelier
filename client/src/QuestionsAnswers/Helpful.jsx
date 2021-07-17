import React from 'react';

var Helpful = (props) => {

  var testbutton = () => {
    alert('testing button')
  }

  var count = 10;

  return (
  <div>
    Helpful?
    <button onClick={testbutton} className='reporthelpful-btn'>Yes</button>
    ({count})
  </div>
  )
}
export default Helpful;