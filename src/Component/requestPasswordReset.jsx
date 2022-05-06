import React from "react";
import {
  Link
} from 'react-router-dom';

// Use the following line for deployment!
const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
//Use the following line for local testing!
//const API = "http://localhost:8080/modals/"

export default class RequestReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      url : window.location.href,
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

  // when the user hits submit, process the email sending through the API
  emailSubmitHandler = event => {
    //keep the form from actually submitting
    event.preventDefault();

    //make the api call to the authentication page
    fetch(API+"requestResetToken.php", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        url: this.state.url
      })
    })
    .then(res => {
      if (res.status == 500){
        this.setState({
          errorMessage: "An error occured, please try again!",
        })
      }
      else if (res.status == 404){
        this.setState({
          errorMessage: "The email you entered is either invalid, or does not have a user associated with it!",
        })
      }
      else {
        this.setState({
          currentForm: 1,
          errorMessage: ""
        })
      }
    })
  };

  render() {
    if(this.state.currentForm === 1){
      return (
        <>
        <body>
        <h3>A link has been sent to the following email: {this.state.email}</h3>
        Please follow the instructions sent to you email to successfully reset your password!
        </body>
        </>); 
    }
    else {
      return (
        <div>
        
        <form onSubmit={this.emailSubmitHandler}>
          <label>
            <h3>Forgot Password?</h3>
            <p><small>Enter the email associated with your<br/>
            account to receive a password reset token.</small></p>
            <input type="input" onChange={this.myEmailChangeHandler} />
          </label>
          <br/>
          <body>{this.state.errorMessage}</body>
          <input className="btn btn-primary" type="submit" value="Reset" />
          <Link to="/CSE442-542/2022-Spring/cse-442h/login">
            <button className="btn btn-primary">
              Cancel
            </button>
          </Link>
        </form>
        <br/>
        </div>);
    }
    }
}
