import React from 'react';
import $ from 'jquery';

class HelpfulQuestionCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qhelpid: props.id,
      pid: props.mainProductId,
      qhelpfulcount: props.defaultcounter,
    };

    this.helpfulQincrementer = this.helpfulQincrementer.bind(this);
    this.increasecounter = this.increasecounter.bind(this);
  }

  increasecounter() {
    this.setState({
      qhelpfulcount: this.state.qhelpfulcount + 1,
    });
  }

  helpfulQincrementer() {
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/qhelpful`,
      contentType: 'application/json',
      data: JSON.stringify({ qhelpid: this.state.qhelpid }),
      success: () => {
        this.increasecounter();
        console.log('helpfulQincrementer++ ');
      },
      error: () => {
        console.log('err helpfulAnswerAjax');
      },
    });
  }

  render() {
    return (
      <div className=" helpfulQuestionCounter">
        Helpful??
        {this.state.qhelpfulcount}
        <button
          type="submit"
          className="helpfulQuestionCounter questionhelpfulbtn"
          onClick={() => {
            this.helpfulQincrementer();
          }}
        >
          Yes
        </button>
      </div>
    );
  }
}

export default HelpfulQuestionCount;
