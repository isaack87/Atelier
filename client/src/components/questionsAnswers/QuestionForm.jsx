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
      fields: {},
      formError: {}
    };

    this.onClick = this.onClick.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.showForm = this.showForm.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.onClose = this.onClose.bind(this);
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

  onClose() {
    this.setState({
      showForm: false,
    });
  }

  addQuestion() {
    if (this.formValidation()) {
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
        success: () => {
          this.setState({
            showForm: false,
            body: '',
            name: '',
            email: '',
            photos: []
          })
          alert('Question Posted');
          console.log('addquestion success');
        },
        error: () => {
          console.log('error in addQuestion');
        },
      });
    } else {
      alert('form invalid');
    }
  }

  formValidation() {
    const name = this.state.name;
    const body = this.state.body;
    const email= this.state.email;
    let validForm = true;

    if (!name) {
      validForm = false;
    }

    if (!body) {
      validForm = false;
    }

    if (typeof name !== 'undefined') {
      if (!name.match(/^[a-zA-Z0-9]+$/)) {
        validForm = false;
      }
    }
    return validForm;
  }

  showForm() {
    return (
      <div className="form-box">
        <form>
        <h1>Ask Your Question <button type="submit" className='X' onClick={this.onClose}>X</button></h1>
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
            Enter Question Here*
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
            onClick={this.addQuestion}
            value="Post Question"
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
