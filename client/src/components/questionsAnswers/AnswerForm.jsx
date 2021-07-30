import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      currentQID: props.qid
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ showForm: true });
  }

  showForm() {
    return (
    <div className="overlay">
      <form id="addquestion">
      <label>
        <input name="body" className="a-body" placeholder="Add Answer text ....." type="textbox" />
      </label>
      <label>
        <input name="name" className="a-name" placeholder="Enter UserName ...." type="text" />
      </label>
      <label>
        <input name="email" className="a-email" placeholder="Enter Email ...." type="text" />
      </label>
      <br />
      <label>
        <input type="submit" className="a-btn-submit" value="Post Answer" />
      </label>
    </form>
  </div>
  );
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
            <button className="addanswer" type="submit" onClick={ this.onClick }>
                Add Answer
              {showForm && this.showForm()}
            </button>
      </div>
    );
  }
}

export default AnswerForm;