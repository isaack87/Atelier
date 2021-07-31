import React from 'react';
import $ from 'jquery';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      currentQID: props.qid,
      currentPID: props.pid,
      body: '',
      name: '',
      email: '',
      photos: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.showForm = this.showForm.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  onClick() {
    this.setState({ showForm: true });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  addAnswer(e) {
    e.preventDefault();
    const info = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
      question_id: this.state.currentQID
    };

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/addAnswer',
      contentType: 'application/json',
      data: JSON.stringify(info),
      success: () => {
        this.setState({
          body: '',
          name: '',
          email: '',
          showForm: false,
        });
        console.log('add answer success post');
      },
      error: () => {
        console.log('error in addAnswers');
      },
    });
  }

  showForm() {
    return (
      <div className="overlay">

        <form id="addquestion">

          <input value={this.state.body}
            className="a-body"
            placeholder="Add Answer text ....."
            type="textbox"
            onChange={this.onChangeBody}
          />

          <input value={this.state.name}
            className="a-name"
            placeholder="Enter UserName ...."
            type="text"
            onChange={this.onChangeName}
          />

          <input email={this.state.email}
            className="a-email"
            placeholder="Enter Email ...."
            type="text"
            onChange={this.onChangeEmail}
          />
          <br />

          <input type="submit"
            className="a-btn-submit"
            value="Post Answer"
            onClick={this.addAnswer}
          />

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
