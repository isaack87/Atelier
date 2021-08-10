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

    this.onOpenForm = this.onOpenForm.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.showForm = this.showForm.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
  }

  onOpenForm() {
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

  onCloseForm() {
    if (this.state.showForm === true) {
      console.log('clciked');
      this.setState({
        showForm: false,
      });
    }
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
          });
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
      <div className="qboxcenter">
        <form>
          <button type="submit" className='X' onClick={this.onCloseForm}>X</button>
          <h1>Ask Your Question</h1>

          <label className="field field_v1">
            <input
              value={this.state.name}
              className="field__input"
              onChange={this.onChangeName}
              type="text"
              name="name"
              placeholder="Example: Isaac123!**"
            />
            <span class="field__label-wrap">
              <span class="field__label">Enter UserName*</span>
            </span>
          </label>

          < br/>

          <label className="field field_v1">
            <input
              value={this.state.email}
              className="field__input"
              onChange={this.onChangeEmail}
              name="email"
              type="text"
              placeholder="Why did you like the product or not**"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            />

            <span class="field__label-wrap">
              <span class="field__label">Enter Email*</span>
            </span>

          </label>

          < br/>

          <label className="field field_v1">
            <textarea
              value={this.state.body}
              rows="10"
              className="field__input"
              onChange={this.onChangeBody}
              name="body"
              placeholder="Type your Message**"
            />

            <span class="field__label-wrap">
              <span class="field__label"> Enter Question Here*</span>
            </span>
          </label>

          < br/>

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
        <button className="add-q-btn" type="submit" onClick={ this.onOpenForm }>
          ADD A QUESTION
          <img alt="plusimage" className="imgplus" src="plus.png" />
          {showForm && this.showForm()}
        </button>
      </div>
    );
  }
}

export default QuestionForm;