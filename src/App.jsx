import React from "react";
import "./App.css";
import "./Form.css";
import Profile from "./Component/Profile.js";
import SignUp from "./Component/FormSignup.js";
import LogInForm from "./Component/FormLogin.js";
import GameRoom from "./Component/GameRoom.jsx";

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
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="game" id="gamePage">
              <Routes>
                <Route path="/" element={<Home login={this.login} />} />
                <Route path="/settings" element={<Settings login={this.login} />} />
                <Route path="/createroom" element={<MakeRoom login={this.login} />} />
                <Route path="/join" element={<JoinRoom login={this.login} />} />
                <Route path="/register" element={<Register login={this.login} />} />
                <Route path="/login" element={<SignIn login={this.login} />} />
                <Route path="/room" element={<Game login={this.login} />} />
                <Route path="/user" element={<ProfilePage element={<ProfilePage/>} />} />
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
      <SignUp login={props.login}/>
    </div>
  );
}

const Home = (props) => {
  return(
    <div>
      <p> This is where you choose to login,register, or play as guest </p>
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

const SignIn = (props) => {
  return(
    <div>
      <LogInForm login={props.login}/>
    </div>
  )
}

const Game = (props) =>{
  return(
    <div>
      <GameRoom login={props.login}/>
    </div>
  )
}

const ProfilePage = (props) =>{
  return(
    <div>
      <Profile></Profile>
    </div>
  )
}

export default App;
