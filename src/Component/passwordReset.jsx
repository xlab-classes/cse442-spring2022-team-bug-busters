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
      email: "",
      token: "",
      newPassword: "",
      confirmNewPassword: "",
      errorMessage: "",
      currentForm: 0,
    };
  }

  // change handlers keep the state current with the values as you type them, so
  // the submit handler can read from the state to hit the API layer
  myEmailChangeHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  myTokenChangeHandler = event => {
    this.setState({
      token: event.target.value
    });
  };

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
        email: this.state.email,
        token: this.state.token,
        newPassword: this.state.newPassword,
        confirmNewPassword: this.state.confirmNewPassword
      })
    })
    .then(res => {
      //If the response is not okay, have the user input a new email address.
      if (!res.ok){
        this.setState({
          errorMessage: "The email you entered is either invalid, or does not have a user associated with it!"
        })
        this.setState({
          email: ""
        })
      }
      //Else send the success page.
      else {
        this.setState({
          currentForm: 1,
          errorMessage: ""
        })
      }
    },
    );
  };

  render() {
      return (
        <div>
        
        <form onSubmit={this.emailSubmitHandler}>
          <label>
            <h3>Update Password</h3>
            <p><small>Enter the token you received via email!</small></p>
            <input type="input" onChange={this.myTokenChangeHandler} />
            <p><small>Enter the email associated with your account!</small></p>
            <input type="input" onChange={this.myEmailChangeHandler} />
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
}
