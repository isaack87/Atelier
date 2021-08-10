import React, {useState, useContext} from 'react';
import QuestionsAnswersState from './QuestionAnswerState.jsx';
import { ProductStateContext } from './productState.jsx';

const AnswerPhotos = () => {
  const {productId} = useContext(ProductStateContext);


 const productId = 28212 //the product id in the index.jsx state


 const test = 'appear';
  // const data = props.answersList.map((pics, index) => {
  //   <img key={index} alt="pics" src={pics.photos} />
  //   pics.photos.map( )

  //   <img key={index} alt="pics" src={pics.photos.length === 0 ? pics.photos : { test } } />
  // //});

  return (
    <div>
    </div>
  );
};

export default AnswerPhotos;