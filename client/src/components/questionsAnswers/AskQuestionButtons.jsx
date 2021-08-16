import React from 'react';
import LoadMoreAnswers from './LoadMoreAnswers.jsx'
import QuestionForm from './QuestionForm.jsx'

const AskQuestions = (props) => (
  <div className='loadmore-a'>
    <LoadMoreAnswers
      loadMoreAnswers={props.loadMoreAnswers}
      btnvisible={props.btnvisible}
    />
    <div className="buttons buttoncontainers">
      <button className={props.btnvisibleq ? 'add-q-btn' : 'btndisappear'}
        onClick={props.loadMoreQuestions}
        type="submit">
        MORE ANSWERED QUESTIONs
      </button>
      <QuestionForm mainProductId={props.mainProductId} updateQuestions={props.updateQuestions}/>
    </div>
  </div>
);

export default AskQuestions;