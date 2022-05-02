import React from "react";
import "../css/settings.css"
import NavBar from "./NavBar";
import pic0 from "../assets/profile_pictures/pic0.png";
import pic1 from "../assets/profile_pictures/pic1.png";
import pic2 from "../assets/profile_pictures/pic2.png";
import pic3 from "../assets/profile_pictures/pic3.png";
import pic4 from "../assets/profile_pictures/pic4.png";
import pic5 from "../assets/profile_pictures/pic5.png";
import pic6 from "../assets/profile_pictures/pic6.png";
import pic7 from "../assets/profile_pictures/pic7.png";
import pic8 from "../assets/profile_pictures/pic8.png";


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
            <div id="container">
              <div className="containerSettings">
                <div>
                  <div id="title">
                    <h2>Settings</h2>
                  </div>
                </div>
                <div id="pic-select">
                  <label>
                    <input type="radio" name="pfp" value="pic0"/>
                    <img src={pic0} height="50" width="50"/>
                  </label>
                  <label>
                    <input type="radio" name="pfp" value="pic1"/>
                    <img src={pic1} height="50" width="50"/>
                  </label>
                  <label>
                    <input type="radio" name="pfp" value="pic2"/>
                    <img src={pic2} height="50" width="50"/>
                  </label>
                </div>
              </div>
            </div>
        </div>
    )
  }
}