import React from "react";
import { AppIndicator } from "react-bootstrap-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
// Testing URL
const API = "http://localhost:8080/modals/";
export default class SignUp extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      errors: {}
    };
  }
  
  handleSubmit = event => {
      event.preventDefault();
      let errors = {};
      fetch(API + "register.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        })
      })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          console.log(result.status); 
          //document.location = "/CSE442-542/2022-Spring/cse-442h/login"
          if(result.message.length === 0){
            // error with sign up
            errors["register_failed"] = "fail";
            this.setState({
              errors: errors
            })
          }else{
            errors["register_success"] = "success";
            this.setState({
              errors: errors
            })
          }
        },
      )
  };

  //NOTE IMPORTANT: In handling multiple inputs fields with one handler,
  //get the 'value' from target and the 'name' of target  
  pwdChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value,
      errors: {}
    });
  };

  emailChangeHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Let's play, Bug Busters!</h1>
        <h2>Create your account by filling out the information below.</h2>
        <div className="register">
          {this.state.errors.register_failed && <div class="alert alert-danger" role="alert">Sorry, that username exists!</div>}
          {this.state.errors.register_success && <div class="alert alert-success" role="alert">
            You have successfully registered! <a href="login" class="alert-link">Login Here!</a></div>}
          <label>
            Username
            <input
              type="text"
              class="form-control"
              name="username"
              value={this.state.username}
              placeholder="Enter your username"
              onChange={this.usernameChangeHandler}
              required
            />
          </label>
        </div>
        <div className="register">
          <label>
            Email
            <input
              type="text"
              class="form-control"
              name="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.emailChangeHandler}
              required
            />
          </label>
        </div>
        <div className="register">
          <label>
            Password
            <input
              type="password"
              class="form-control"
              name="password"
              value={this.state.password}
              placeholder="Enter your password"
              onChange={this.pwdChangeHandler }
              required
            />
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <br></br>
        <span className="login">
          Already have an account? Login <a href="login">here</a>
        </span>
      </form>
      </div>
    )
  }
}
