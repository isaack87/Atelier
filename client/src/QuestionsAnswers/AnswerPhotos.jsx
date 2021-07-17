import React from 'react';
import testdata from './exampleData.jsx'

var AnswerPhotos = (props) => {
  var test = 'appear'
  var data = testdata.map( (data) => (
    <img src={data.Photos.length === 0 ? console.log('hi') : data.Photos}/>
  )
  )

  return (
  <div>
    {data}
  </div>
  )

}

export default AnswerPhotos;