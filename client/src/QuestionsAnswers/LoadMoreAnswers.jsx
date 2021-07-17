import React from 'react';

var LoadMoreAnswers = (props) => {


  var testbutton = () => {
    alert('testing button')
  }

  return (
  <div>
    <button onClick={testbutton} className='loadmoreanswers'>LOAD MORE ANSWERS</button>
  </div>
  )
}


export default LoadMoreAnswers;