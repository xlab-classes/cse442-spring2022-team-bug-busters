import React from "react";
import { AppIndicator } from "react-bootstrap-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/register.php"

const API = "http://localhost:8080/modals/";

export default function Form() {
  
  const [state, setState] = React.useState({
    username: "",
    password: "",
    email: ""
  })
  
  function handleSubmit(event) {
      event.preventDefault();
      
      fetch(API + "register.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
      .then(res => res.json())
      .then(
        result => {
          document.location = "/CSE442-542/2022-Spring/cse-442h/login"
          alert('Your account has been submitted!');
        },
      error =>{
        alert("Fill in all the account info!");
      }
    )
  };


  //NOTE IMPORTANT: In handling multiple inputs fields with one handler,
  //get the 'value' from target and the 'name' of target  
  function handleChange(event) {
    const value = event.target.value;
    setState({
      //(updater, [callback])
      ...state, [event.target.name]: value
    })
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Let's play, Bug Busters!</h1>
      <h2>Create your account by filling out the information below.</h2>
      <div className="register">
      <label>
        Username
        <input
          type="text"
          class="form-control"
          name="username"
          value={state.username}
          placeholder="Enter your username"
          onChange={handleChange}
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
          value={state.email}
          placeholder="Enter your email"
          onChange={handleChange}
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
          value={state.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <br></br>
      <span className="login">
        Already have an account? Login <a href="login">here</a>
      </span>
    </form>
  );
}
