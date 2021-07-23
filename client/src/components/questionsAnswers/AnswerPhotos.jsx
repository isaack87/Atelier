import React from 'react';
import testdata from './exampleData.jsx'

const AnswerPhotos = () => {
  const test = 'appear';
  const data = testdata.map((pics) => (
    <img key={pics.id} alt="pics" src={pics.Photos.length === 0 ? { test } : pics.Photos} />
  ));

  return (
    <div>
      {data}
    </div>
  );
};

export default AnswerPhotos;
