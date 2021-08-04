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
      bold: false,
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
    if (e.target.value === 'Seller') {
      this.setState({
        name: e.target.value,
        bold: true,
      });
    } else {
      this.setState({
        name: e.target.value,
      });
    }
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
      <div className="form-box">
        <form>
        <h1>Ask Your Answer <button type="submit" className='X' onClick={this.onClose}>X</button></h1>
          <label>
            Enter UserName*
            <input value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              name="name"
              placeholder="Example: jackson11!**"
            />
          </label>

          <label>
            Enter Email*
            <input value={this.state.email}
              onChange={this.onChangeEmail}
              name="email"
              type="text"
              placeholder="Why did you like the product or not**"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
            />
          </label>

          <label>
            Enter Answer Here*
            <textarea value={this.state.body}
              cols="30"
              rows="10"
              onChange={this.onChangeBody}
              name="body"
              placeholder="Type your Message**"
            />
          </label>
          <input
            type="submit"
            onClick={this.addAnswer}
            value="Post Answer"
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
