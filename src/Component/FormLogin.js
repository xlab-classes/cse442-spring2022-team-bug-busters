import React from "react";

// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
const API = "http://localhost:8080/modals/"

// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class LoginForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      sessionToken: "",
      errors: {}
    };
  }
  

  pwdChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = event => {
      // alert('You have been logged into your account!');
      let errors = {};
      event.preventDefault();
      fetch(API + "login.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(
        result => {
          if(result.token.length !== 0){
            console.log("login success");
            this.setState({
              sessionToken: result.token,
              login: true
            });
            sessionStorage.setItem("token", result.token);
            document.location = "/CSE442-542/2022-Spring/cse-442h/"
          }else{
            console.log("login failed");
            sessionStorage.removeItem("token");
            errors["login_failed"] = "Wrong username or password";
            this.setState({ 
              errors: errors,
              sessionToken: "",
              login: false
            });
          }
        },
      );
    }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Sign in to your account to begin playing!</h2>
          {this.state.errors.login_failed && <div class="alert alert-danger" role="alert">Incorrect Username or Password!</div>}
          <div className="login">
            <label>
              Username
              <input
                type="username"
                className="form-control"
                value={this.state.username}
                name="username"
                placeholder="Enter your username"
                onChange={this.usernameChangeHandler}
              />
            </label>
          </div>
          <div className="register">
            <label>
              Password
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                name="password"
                placeholder="Enter your password"
                onChange={this.pwdChangeHandler}
              />
            </label>
          </div>
          <input id="loginButton" class="btn btn-primary" type="submit" value="Login" />
          <br></br>
          <span className="login">
            Don't have an account? Register <a href="/CSE442-542/2022-Spring/cse-442h/register">here</a>
          </span>
          <br></br>
          <span className="login">
            Forgot your password? Reset it <a href="/CSE442-542/2022-Spring/cse-442h/requestReset">here</a>
          </span>
        </form>
      </div>
    )
  }
}