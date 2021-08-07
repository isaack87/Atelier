import React from 'react';
import serverhelper from '../../../../server/QuestionAnswerAPI';

const QuestionReport = (props) => {
  let reportStatus = 'Report';
  const reportedBtn = () => {
    reportStatus = 'Reported';
    serverhelper.putReportQuestion(props.qid);
  };

  return (
    <div>
      <button type="submit" onClick={reportedBtn} className="reporthelpful-btn">{reportStatus}</button>
    </div>
  );
};

export default QuestionReport;
//