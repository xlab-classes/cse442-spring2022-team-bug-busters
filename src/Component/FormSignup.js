import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
  
  // functional component - useState(), useEffect(): collect user data by using the Axios API
  const [state, setState] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  })
  
  const handleSubmit = event => {
    alert('Your account has been submitted!');
    event.preventDefault();

    const data = {firstname, lastname, username, password};

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': "applications/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(res => console.log(res));
  }

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
        First Name
        <input
          type="text"
          class="form-control"
          name="firstname"
          value={state.firstname}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          class="form-control"
          name="lastname"
          value={state.lastname}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
      </label>
      </div>
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
      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      <br></br>
      <span className="login">
        Already have an account? Login <a href="login">here</a>
      </span>
    </form>
  );
}
