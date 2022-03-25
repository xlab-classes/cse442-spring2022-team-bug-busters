import React from "react";
const API = "http://localhost/react/api/index.php"
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class LoginForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      sessiontoken: "",
    };
  }
  

  pwdChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
      // alert('You have been logged into your account!');
      event.preventDefault();
      console.log(this.state);

      
      fetch(`${API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
      })
        .then((res) => {
          res.text()
        })
        .then((result) =>{
            console.log(result);
            // console.log("Testing");
            // console.log(result.token);
            // console.log(result.connection);
          }
        )
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Sign in to your account to begin playing!</h2>
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
          Don't have an account? Register <a href="/register">here</a>
        </span>
      </form>
    )
  }
}