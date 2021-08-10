import React, {useState, useContext} from 'react';
import QuestionsAnswersState from './QuestionAnswerState.jsx';
import { ProductStateContext } from './productState.jsx';

const AnswerPhotos = () => {
  const {productId} = useContext(ProductStateContext);


 const productId = 28212 //the product id in the index.jsx state
 const test = 'appear';
  return (
    <div>
    </div>
  );
};

export default AnswerPhotos;