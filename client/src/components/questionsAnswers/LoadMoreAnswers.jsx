import React from 'react';

const LoadMoreAnswers = (props) => (
  <div>
    <button type="submit" onClick={props.loadMoreAnswers} className={props.btnvisible ? "loadmoreanswers" : "btndisappear"}>LOAD MORE ANSWER!</button>
  </div>
);

export default LoadMoreAnswers;
