import React from 'react';
import $ from 'jquery';

class HelpfulQuestionCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qhelpid: props.id,
      pid: props.mainProductId,
      new: [],
      qhelpfulcount: props.defaulthelper,
    };

    this.helpfulQincrementer = this.helpfulQincrementer.bind(this);
    this.getHelpful = this.getHelpful.bind(this);
    this.test = this.test.bind(this);
  }

  getHelpful() {
    fetch(`http://localhost:3000/qhelpful?qid=${this.state.pid}`)
      .then((response) => response.json())
      .then((questions) => {
        this.setState({
          qhelpfulcounter: questions.results,
        }, () => {
          const newObj = [];
          let data = this.state.qhelpfulcounter
          data.map(e => {
            newObj.push({
              qID: e.question_id,
              questionHelpful: e.question_helpfulness,
            });
          });
          this.setState({
            new: newObj,
          }, () => {
            this.test();
          });
        });
      });
  }

  test() {
    const qhelperarray = [];
    this.state.new.map((e) => {
      qhelperarray.push([e.qID, e.questionHelpful]);
    });
    this.setState({
      new: qhelperarray,
    }, () => {
      this.setState({
        qhelpfulcount: this.state.qhelpfulcount + 1,
      });
    });
  }

  helpfulQincrementer() {
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/qhelpful`,
      contentType: 'application/json',
      data: JSON.stringify({ qhelpid: this.state.qhelpid }),
      success: () => {
        this.getHelpful();
        console.log('helpfulQincrementer++ ');
      },
      error: () => {
        console.log('err helpfulAnswerAjax');
      },
    });
  }

  render() {
    return (
      <div className="helpfulQuestionCounter">
        Helpful? {this.state.qhelpfulcount}
        <button
          type="submit"
          className="questionhelpfulbtn"
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
