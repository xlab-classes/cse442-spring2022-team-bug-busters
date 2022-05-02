import React from "react";
import "../css/settings.css"
import NavBar from "./NavBar";

import {
  Link
} from 'react-router-dom';

let public_imgs_path = process.env.PUBLIC_URL + "/profile_pictures/"
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
                <div id="settings-title-container">
                  <div id="settings-title">
                    <h2>Settings</h2>
                  </div>
                </div>
                <div id="pfp-title">
                  <h4>Update your profile picture!</h4>
                </div>
                <div id="group-pic-select">
                  <div className="pic-select">
                    <label>
                      <input type="radio" name="pfp" value="pic0"/>
                      <img src={public_imgs_path + "pic0.png"} height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic1"/>
                      <img src={public_imgs_path + "pic1.png"} height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic2"/>
                      <img src={public_imgs_path + "pic2.png"} height="50" width="50"/>
                    </label>
                  </div>
                  <div className="pic-select">
                    <label>
                      <input type="radio" name="pfp" value="pic3"/>
                      <img src={public_imgs_path + "pic3.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic4"/>
                      <img src={public_imgs_path + "pic4.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic5"/>
                      <img src={public_imgs_path + "pic5.png"}height="50" width="50"/>
                    </label>
                  </div>
                  <div className="pic-select">
                    <label>
                      <input type="radio" name="pfp" value="pic6"/>
                      <img src={public_imgs_path + "pic6.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic7"/>
                      <img src={public_imgs_path + "pic7.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic8"/>
                      <img src={public_imgs_path + "pic8.png"}  height="50" width="50"/>
                    </label>
                  </div>
                </div>
                <div id="pwChange-title">
                  <h4>Change your password</h4>
                </div>
              </div>
            </div>
        </div>
    )
  }
}