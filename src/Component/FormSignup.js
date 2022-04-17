import axios from "axios";
import React from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
  
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  })
  
  // https://stackoverflow.com/questions/65456583/how-to-post-request-using-axios-with-react-hooks
  function handleSubmit(event) {
    alert('Your account has been submitted!');
    event.preventDefault();

    const {firstname, lastname, username, password} = state;
    const user = {firstname, lastname, username, password};
    const API = 'http://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/register.php'
    console.log(user);

    axios.post(API, user)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
    // fetch('http://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/register.php', {
    //   method: 'POST',
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //     "Access-Control-Allow-Origin":"*"
    //   },
    //   body: JSON.stringify(state)
    // }).then((response) => response.json())
    // .then((data) => {console.log(data)});
  }

  //NOTE IMPORTANT: In handling multiple inputs fields with one handler,
  //get the 'value' from target and the 'name' of target  
  const handleChange = name => e => {
    // console.log("You're in handleChange!");
    // const value = event.target.value;
    setState({
      //(updater, [callback])
      ...state, [name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Let's play, Bug Busters!</h1>
      <h2>Create your account by filling out the information below.</h2>
      <div className="register">
      <label>
        First Name
        <input
          type="text"
          className="form-control"
          name="firstname"
          value={state.firstname}
          placeholder="Enter your first name"
          onChange={handleChange('firstname')}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          className="form-control"
          name="lastname"
          value={state.lastname}
          placeholder="Enter your last name"
          onChange={handleChange('lastname')}
        />
      </label>
      </div>
      <div className="register">
      <label>
        Username
        <input
          type="text"
          className="form-control"
          name="username"
          value={state.username}
          placeholder="Enter your username"
          onChange={handleChange('username')}
        />
      </label>
      </div>
      <div className="register">
      <label>
        Password
        <input
          type="password"
          className="form-control"
          name="password"
          value={state.password}
          placeholder="Enter your password"
          onChange={handleChange('password')}
        />
      </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <br></br>
      <span className="login">
        Already have an account? Login <a href="login">here</a>
      </span>
    </form>
  );
}
