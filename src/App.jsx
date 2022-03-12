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

const Home = (props) => {
  return(
      <LoginForm login={props.login} />
  );
}



export default App;
