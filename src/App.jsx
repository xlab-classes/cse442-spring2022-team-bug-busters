import React from "react";
import "./App.css";
import "./Form.css";
import Leaderboard from "./Component/Leaderboard.jsx";
import Profile from "./Component/Profile.jsx";
import SignUp from "./Component/FormSignup.js";
import LogInForm from "./Component/FormLogin.js";
import GameRoom from "./Component/GameRoom.jsx";
import WaitingRoom from "./Component/WaitingRoom";
import RequestReset from "./Component/requestPasswordReset.jsx";
import PasswordReset from "./Component/passwordReset.jsx";
import Settings from "./Component/Settings.jsx";
import Wordle from "./Component/Wordle.jsx";
import HomePage from "./Component/Home.jsx";

import {
  BrowserRouter as Router, Routes, Route, Link
}from 'react-router-dom';
import LoginForm from "./Component/FormLogin.js";
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
                  <Route path={PUBLIC_URL + "/settings"} element={<EditProfile login={this.login} />} />
                  {/* <Route path={PUBLIC_URL + "/createroom"} element={<MakeRoom login={this.login} />} />
                  <Route path={PUBLIC_URL + "/join"} element={<JoinRoom login={this.login} />} /> */}
                  <Route path={PUBLIC_URL + "/register"} element={<Register login={this.login} />} />
                  <Route path={PUBLIC_URL + "/leaderboard"} element={<Leader login={this.login} />} />
                  <Route path={PUBLIC_URL + "/login" }element={<SignIn login={this.login} />} />
                  {/* <Route path={PUBLIC_URL + "/room"} element={<Game login={this.login} />} /> */}
                  <Route path={PUBLIC_URL + "/user"} element={<ProfilePage element={<ProfilePage/>} />} />
                  <Route path={PUBLIC_URL + "/requestReset"} element={<RequestPasswordReset/>} />
                  <Route path={PUBLIC_URL + "/passwordReset"} element={<PasswordResetForm/>} />
                  <Route path={PUBLIC_URL + "/"} element={<Home login={this.login} />} />
                  <Route path={PUBLIC_URL + "/wordle"} element={<WordleRoom login={this.login} />} />
                </Routes>
              </div>
            </header>
          </div>
        </Router>
      </div>

    );

  }
}

const WordleRoom = (props) => {
  if(!sessionStorage.getItem("token")){
    return(
      <div>
        <LoginForm login={props.login}/>
      </div>
    )
  }else{
    return(
      <div>
        <Wordle login={props.login}/>
      </div>
    )
  }
}

const Register = (props) => {
  if(!sessionStorage.getItem("token")){
    return(
      <div>
        <LoginForm login={props.login}/>
      </div>
    )
  }else{
    return(
      <div>
        <SignUp login={props.login}/>
      </div>
    )
  }
}

const Home = (props) => {
  if(!sessionStorage.getItem("token")){
    return(
      <div>
        <LoginForm login={props.login}/>
      </div>
    )
  }else{
    return(
      <div>
        <HomePage login={props.login}/>
      </div>
    )
  }
}

const EditProfile = (props) => {
  if(!sessionStorage.getItem("token")){
    return(
      <div>
        <LoginForm login={props.login}/>
      </div>
    )
  }else{
    return(
      <div>
        <Settings login={props.login}/>
      </div>
    )
  }
}

const SignIn = (props) => {
  return(
    <div>
      <LogInForm login={props.login}/>
    </div>
  )
}

const ProfilePage = (props) =>{
  if(!sessionStorage.getItem("token")){
    return(
      <div>
        <LoginForm login={props.login}/>
      </div>
    )
  }else{
    return(
      <div>
        <Profile login={props.login}/>
      </div>
    )
  }
}

const RequestPasswordReset = (props) =>{
  return(
    <div>
      <RequestReset/>
    </div>
  )
}

const PasswordResetForm = (props) =>{
  return(
    <div>
      <PasswordReset/>
    </div>
  )
}

// no longer needed
// const MakeRoom = (props) => {
//   return(
//     <div>
//       <p>This is the Make Room page!</p>
//     </div>
//   )
// }

// const JoinRoom = (props) => {
//   return(
//     <div>
//       <WaitingRoom></WaitingRoom>
//     </div>
//   )
// }
//
// const Game = (props) =>{
//   return(
//     <div>
//       <GameRoom login={props.login}/>
//     </div>
//   )
// }

export default App;
