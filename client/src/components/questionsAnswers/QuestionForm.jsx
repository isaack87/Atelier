import React from 'react';
import $ from 'jquery';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      currentPID: props.mainProductId,
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
    this.addQuestion = this.addQuestion.bind(this);
    };

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

  addQuestion(e) {
    e.preventDefault();
    const info = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      product_id: this.state.currentPID
    };
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/addQuestion',
      contentType: 'application/json',
      data: JSON.stringify(info),
      success: (data) => {
        console.log('add question success post');
      },
      error: () => {
        console.log('error in addQuestion');
      },
    });
  }


  showForm() {
    return (
      <div className="overlay">

        <form id="addquestion">

          <input value={this.state.body}
            className="a-body"
            placeholder="Add Question text ....."
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
            onClick={this.addQuestion}
          />

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
