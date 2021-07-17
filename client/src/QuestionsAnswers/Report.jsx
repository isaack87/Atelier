import React from 'react';

var Report = (props) => {

  var testbutton = () => {
    alert('testing button')
  }

  return (
  <div>
    <button onClick={testbutton} className='reporthelpful-btn'>Report</button>
  </div>
  )
}
export default Report;