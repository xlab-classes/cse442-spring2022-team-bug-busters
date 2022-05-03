import React from "react";
import {
  Link
} from 'react-router-dom';
// the reset password form will display regardless of login status, an email
// is needed to send the token to and then the user will be prompted
// to input a new password, confirm the new password and the token.

// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
//Use the following line for local testing!
const API = "http://localhost:8080/modals/"

export default class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.location.href.split('/')[7],
      newPassword: "",
      confirmNewPassword: "",
      errorMessage: "",
      currentForm: 0
    };
  }

  myNewPasswordChangeHandler = event => {
    this.setState({
      newPassword: event.target.value
    });
  };

  myConfirmNewPasswordChangeHandler = event => {
    this.setState({
      confirmNewPassword: event.target.value
    });
  };

  // when the user hits submit, process the email sending through the API
  emailSubmitHandler = event => {
    //keep the form from actually submitting
    event.preventDefault();

    //make the api call to the authentication page
    fetch(API+"resetPassword.php", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: this.state.token,
        newPassword: this.state.newPassword,
        confirmNewPassword: this.state.confirmNewPassword
      })
    })
    .then(res => res.json())
    .then(
      result => {
        if (result.message === "The passwords given did not match!"){
          this.setState({
            errorMessage: "The given passwords did not match!"
          })
        }
        else if (result.message === "This token is invalid!"){
          this.setState({
            errorMessage: "This token is invalid, double check the link you received!"
          })
        }
        else(
        //document.location = "/CSE442-542/2022-Spring/cse-442h/login"
          this.setState({
            currentForm: 1,
            errorMessage: ""
          })
        )
      }
    )
  };

  render() {
    if (this.state.currentForm == 0){
      return (
        <div>
        
        <form onSubmit={this.emailSubmitHandler}>
          <label>
            <h3>Update Password</h3>
            <p><small>Enter your new password!</small></p>
            <input type="password" onChange={this.myNewPasswordChangeHandler} />
            <p><small>Confirm your new password!</small></p>
            <input type="password" onChange={this.myConfirmNewPasswordChangeHandler} />
          </label>
          <br/>
          <body>{this.state.errorMessage}</body>
          <input className="btn btn-primary" type="submit" value="Change Password" />
          <Link to="/CSE442-542/2022-Spring/cse-442h/login">
            <button className="btn btn-primary">
              Cancel
            </button>
          </Link><br/>
          <span className="login">
          Don't have a token? Get one here! <a href="/CSE442-542/2022-Spring/cse-442h/requestReset">here</a>
        </span>
        </form>
        <br/>
        </div>);
    }
    else {
      return (
      <div>
        <body>
        <h3>Your password has been reset successfully!</h3>
        Please log into your account <a href="/CSE442-542/2022-Spring/cse-442h/login">here</a>!
        </body>
      </div>
      );
    }
  }
}
