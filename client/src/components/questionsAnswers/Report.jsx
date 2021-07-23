import React from 'react';
import serverhelper from '../../../../server/QuestionAnswerAPI';

const Report = () => {
  let reportStatus = 'Report';
  const reportedBtn = () => {
    reportStatus = 'Reported';
    serverhelper.putReportQuestion();
  };

  return (
    <div>
      <button type="submit" onClick={reportedBtn} className="reporthelpful-btn">{reportStatus}</button>
    </div>
  );
};

export default Report;
