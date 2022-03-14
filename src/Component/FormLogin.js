
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  
  const [state, setState] = React.useState({
    username: "",
    password: ""
  })
  
  function handleSubmit(event) {
      alert('You have been logged into your account!');
      event.preventDefault();

      fetch('./server/login.php', {
        method: 'POST',
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
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
      <h2>Sign in to your account to begin playing!</h2>
      <div className="login">
      <label>
        Username
        <input
          type="username"
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
      <button type="submit" class="btn btn-primary">Login</button>
      <br></br>
      <span className="login">
        Don't have an account? Register <a href="register">here</a>
      </span>
    </form>
  );
}
