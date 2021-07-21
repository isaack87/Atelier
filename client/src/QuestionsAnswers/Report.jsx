import React from 'react';

const Report = () => {
  const testbutton = () => {
    alert('testing button');
  };

  return (
    <div>
      <button type="submit" onClick={testbutton} className="reporthelpful-btn">Report</button>
    </div>
  );
};

export default Report;
