import React from "react";
import "./App.css";
import "./Form.css";
import Profile from "./Component/Profile.jsx";
import SignUp from "./Component/FormSignup.js";
import LogInForm from "./Component/FormLogin.js";
import GameRoom from "./Component/GameRoom.jsx";
import WaitingRoom from "./Component/WaitingRoom";
import {
  BrowserRouter as Router, Routes, Route
}from 'react-router-dom';
const PUBLIC_URL = "/CSE442-542/2022-Spring/cse-442h";
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      logout: false,
      login: false
    }
    this.mainContent = React.createRef();
  }

  componentDidMount(){
    window.addEventListener('click', e => {console.log("TESTING EVENT LISTENER")});
  }

  render(){
    return(
      <div basename={PUBLIC_URL}>
        <Router>
          <div className="App">
            <header className="App-header">
              <div className="maincontent" id="mainContent">
                <Routes>
                  <Route path={PUBLIC_URL + "/settings"} element={<Settings login={this.login} />} />
                  <Route path={PUBLIC_URL + "/createroom"} element={<MakeRoom login={this.login} />} />
                  <Route path={PUBLIC_URL + "/join"} element={<JoinRoom login={this.login} />} />
                  <Route path={PUBLIC_URL + "/register"} element={<Register login={this.login} />} />
                  <Route path={PUBLIC_URL + "/login" }element={<SignIn login={this.login} />} />
                  <Route path={PUBLIC_URL + "/room"} element={<Game login={this.login} />} />
                  <Route path={PUBLIC_URL + "/user"} element={<ProfilePage element={<ProfilePage/>} />} />
                  <Route path={PUBLIC_URL + "/"} element={<Home login={this.login} />} />
                </Routes>
              </div>
            </header>
          </div>
        </Router>
      </div>

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
      <WaitingRoom></WaitingRoom>
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
