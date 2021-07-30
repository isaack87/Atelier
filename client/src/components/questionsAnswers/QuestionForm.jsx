import React from 'react';

class QuestionForm extends React.Component {
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
        <input name="body" className="q-body" placeholder="Ask your question ....." type="textbox" />
      </label>
      <label>
        <input name="name" className="q-name" placeholder="Enter User Name ...." type="text" />
      </label>
      <br />
      <label>
        <input type="submit" className="q-btn-submit" value="Post Question" />
      </label>
    </form>
  </div>
  );
  }

  render() {
    const { showForm } = this.state;
    return (
      <div className="buttons">
            <button className="add-q-btn" type="submit" onClick={ this.onClick }>
              ADD A QUESTION
              <img alt="plusimage" className="imgplus" src="plus.png" />
              {showForm && this.showForm()}
            </button>
      </div>
    );
  }
}

export default QuestionForm;
