import React from "react";
import "../css/settings.css"
import NavBar from "./NavBar";
import {
  Link
} from 'react-router-dom';
export default class Settings extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      userid: "",
    };
  }

  render(){
    return(
        <div id="settings">
            <div id="navbar-div">
                <NavBar></NavBar>
            </div>
            <div className="containerSettings">
                <div id="title">
                    <h2>Settings</h2>
                </div>
            </div>
        </div>
    )
  }
}