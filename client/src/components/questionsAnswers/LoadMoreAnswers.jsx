import React from 'react';

const LoadMoreAnswers = (props) => (
  <div>
    <button type="submit" onClick={props.getAnswers} className="loadmoreanswers">LOAD MORE ANSWERS</button>
  </div>
);

export default LoadMoreAnswers;
