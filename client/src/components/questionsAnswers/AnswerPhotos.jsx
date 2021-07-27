import React from 'react';
// import testdata from './exampleData.jsx'
import QuestionsAnswersState from './QuestionAnswerState.jsx'

const AnswerPhotos = (props) => {
  const test = 'appear';

  const data = props.answersList.map((pics, index) => {
    // <img key={index} alt="pics" src={pics.photos} />
    // <img key={index} alt="pics" src={pics.photos.length === 0 ? { test } : pics.photos} />
    // const pics = pics.photos.map(photos => {
    //   return photos.url
    // })
  });

  return (
    <div>
      {data}
    </div>
  );
};

export default AnswerPhotos;
