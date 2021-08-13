import React from 'react';
import $ from 'jquery';
import config from '../../../../config.js';

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
      photo: [],
      selectedFile: '',
      nameValid: true,
      emailValid: true,
      bodyValid: true
    };

    this.onClick = this.onClick.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.showForm = this.showForm.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
    this.fileSelectorHandler = this.fileSelectorHandler.bind(this);
    this.fileUploaderHandler = this.fileUploaderHandler.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  fileSelectorHandler (e) {
    this.setState({
      selectedFile: e.target.files[0]
    });
  }

  fileUploaderHandler(e) {
    e.preventDefault();
    var form = new FormData();
    form.append("image", this.state.selectedFile);
    var options = {
      "url": `https://api.imgbb.com/1/upload?key=${config.imgBBTokeb}`,
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(options).done((response) => {
      var res = JSON.parse(response);
      if (this.state.photo.length <= 5) {
        this.setState({
          photo: [...this.state.photo, res.data.url]
        });
      } else {
        alert('5 photos max');
      }
    });
  }

  onClick() {
    this.setState({ showForm: true });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value,
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

  onChangeName(e) {
    if (e.target.value.toLowerCase() === 'seller') {
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

  formValidation() {
    const name = this.state.name;
    const body = this.state.body;
    const email = this.state.email;

    let validForm = true;

    if (!name) {
      validForm = false;
      this.setState({
        nameValid: false
      });
    }

    if (!body) {
      validForm = false;
      this.setState({
        bodyValid: false
      });
    }

    if (!email) {
      validForm = false;
      this.setState({
        emailValid: false
      });
    }

    if (name === 'undefined') {
      if (!name.match(/^[a-zA-Z0-9]+$/)) {
        validForm = false;
        this.setState({
          nameValid: false
        });
      }
    }

    if ( name && body && email) {
      return validForm;
    }
  }

  addAnswer(e) {
    e.preventDefault();

    if (this.formValidation()) {
      const info = {
        body: this.state.body,
        name: this.state.name,
        email: this.state.email,
        photos: this.state.photo,
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
            photos: [],
            showForm: false,
          });
          console.log('add answer success post');
        },
        error: () => {
          console.log('error in addAnswers');
        },
      });
    } else {
      alert('NOT VALID FORM');
    }
    }


  showForm() {
    const divStyle = {
      margin: '0px',
      height: '200px',
      width: '279px',
      fontSize: '1em'
    };
    const text = {
      fontSize: '1em'
    };

    return (
      <div className="aboxcenter">
        <form>
          <button type="submit" className='X' onClick={this.onCloseForm}>X</button>
          <h1 className='answerboxtitle'>Add Answer</h1>

          <label className="field field_v1">
            <input
              className="field__input"
              value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              name="name"
              maxLength="60"
              placeholder="Example: jack543!**"
            />
            <span className="field__label-wrap">
              <span className="field__label">Enter UserName*</span>
            </span>
          </label>
          < br/>

          < br/>
          <label style={text}> For privacy reasons, do not use your full name or email address**</label>
          < br/>


          < br/>
          <label className="field field_v1">
            <input
              className="field__input"
              value={this.state.email}
              onChange={this.onChangeEmail}
              type="text"
              name="Email"
              placeholder="Example: jack@gmail.com*"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            />
            <span className="field__label-wrap">
              <span className="field__label">Enter Email Here*</span>
            </span>
          </label>
          < br/>

          < br/>
          <label style={text}> For authentication reasons, you will not be emailed**</label>
          < br/>


          < br/>
          <label className="field field_v1">
            <textarea
              className="field__input"
              value={this.state.body}
              onChange={this.onChangeBody}
              type="text"
              name="body"
              cols="50"
              rows="50"
              style={divStyle}
              placeholder="Example: Is this pretty!**"
            />
            <span className="field__label-wrap">
              <span className="field__label center"> Enter Answer Here*</span>
            </span>
          </label>

          < br/>

          <input className='answerbutton upload'
            type="submit"
            onClick={this.addAnswer}
            value="Post Answer"
          />

          <div className="upload">
            <div className="">
              <input type="file" onChange={this.fileSelectorHandler} accept="image/*" />
              <button onClick={this.fileUploaderHandler}> Upload Photo</button>
              < br/>

              {this.state.photo.map((photo, index) => {
                return (
                  <div className='uploadimg img-spacing' key={index}>
                    <img src={photo} className='uploadimg' />
                  </div>
                );
              })}
            </div>
          </div>
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