
import React from 'react'
import LoadMoreAnswers from './LoadMoreAnswers.jsx'


var AskQuestions = (props) => {

  return (
      <div>
        <LoadMoreAnswers/>
      <div className='buttons'>
        <button className="add-q-btn" type='submit'> MORE ANSWERED QUESTIONS</button>
        <button className="add-q-btn" type='submit'> ADD A QUESTION
        <img className="imgplus" src="plus.png"></img>
      </button>
    </div>
  </div>
  )
};

export default AskQuestions;