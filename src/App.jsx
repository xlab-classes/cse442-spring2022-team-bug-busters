import React from "react";
import "./App.css";
import "./Form.css";
import LoginForm from "./Component/FormSignup.js";
import Profile from "./Component/Profile";
import {
  BrowserRouter as Router, Route, Routes
}from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      logout: false,
      login: false
    }
  }

  render(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <div className="game" id="gamePage">
              <Routes>
                <Route path="/" element={<Home login={this.login} />} />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    );

  }
}

const Register = (props) => {
  return(
    <div>
      <LoginForm login={props.login}/>
    </div>
  );
}

const Home = (props) => {
  return(
    <div>
      <p> This is where you login </p>
    </div>
  );
}

const Settings = (props) => {
  return(
    <div>
      <p>This is the Settings Page!</p>
    </div>
  )
}

const MakeRoom = (props) => {
  return(
    <div>
      <p>This is the Make Room page!</p>
    </div>
  )
}

const JoinRoom = (props) => {
  return(
    <div>
      <p> This is where you join a room!</p>
    </div>
  )
  }

const Account = (props) => {
  return(
    <div>
      <p> This is where you register!</p>
    </div>
  )
}

const Game = (props) =>{
  return(
    <div>
      <p> This is where you play the game!</p>
    </div>
  )
}

const ProfilePage = (props) =>{
  return(
    <div>
      <p> This is where your profile is!</p>
    </div>
  )
}



export default App;
