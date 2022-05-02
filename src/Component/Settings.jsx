import React from "react";
import "../css/settings.css"
import NavBar from "./NavBar";

import {
  Link
} from 'react-router-dom';

// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
const API = "http://localhost:8080/modals/"

let public_imgs_path = process.env.PUBLIC_URL + "/profile_pictures/"
export default class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      userid: "",
      pfp_choice: "",
      current_pfp: ""
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount(){
    fetch(API+"getProfilePicture.php", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: sessionStorage.getItem("username")
      })
    })
    .then((res) => res.json())
    .then((result) =>{
      console.log("here");
      console.log(result);  
      if(result.picture.length === 0){
        this.setState({
          current_pfp: "pic0.png",
          pfp_choice: "pic0.png"
        })
      }else{
        this.setState({
          current_pfp: result.picture,
          pfp_choice: result.picture
        })
      }
    });
  }

  onSelectChange = (event) => { 
    console.log(this.state.pfp_choice);
    this.setState({
      pfp_choice: event.target.value,
      current_pfp: event.target.value
    })
    console.log(this.state.pfp_choice);
  }

  submitHandler = () => { 
    console.log(this.state.pfp_choice);
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
                  <div className="pic-select" onChange={this.onSelectChange}>
                    <label>
                      <input type="radio" name="pfp" value="pic0.png" checked={this.state.current_pfp === "pic0.png"}/>
                      <img src={public_imgs_path + "pic0.png"} height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic1.png" checked={this.state.current_pfp === "pic1.png"}/>
                      <img src={public_imgs_path + "pic1.png"} height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic2.png" checked={this.state.current_pfp === "pic2.png"}/>
                      <img src={public_imgs_path + "pic2.png"} height="50" width="50"/>
                    </label>
                  </div>
                  <div className="pic-select" onChange={this.onSelectChange}>
                    <label>
                      <input type="radio" name="pfp" value="pic3.png" checked={this.state.current_pfp === "pic3.png"}/>
                      <img src={public_imgs_path + "pic3.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic4.png" checked={this.state.current_pfp === "pic4.png"}/>
                      <img src={public_imgs_path + "pic4.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic5.png" checked={this.state.current_pfp === "pic5.png"}/>
                      <img src={public_imgs_path + "pic5.png"}height="50" width="50"/>
                    </label>
                  </div>
                  <div className="pic-select" onChange={this.onSelectChange}>
                    <label>
                      <input type="radio" name="pfp" value="pic6.png" checked={this.state.current_pfp === "pic6.png"}/>
                      <img src={public_imgs_path + "pic6.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic7.png" checked={this.state.current_pfp === "pic7.png"}/>
                      <img src={public_imgs_path + "pic7.png"}  height="50" width="50"/>
                    </label>
                    <label>
                      <input type="radio" name="pfp" value="pic8.png" checked={this.state.current_pfp === "pic8.png"}/>
                      <img src={public_imgs_path + "pic8.png"}  height="50" width="50"/>
                    </label>
                  </div>
                </div>
                <form onSubmit={this.submitHandler}>
                  <div id="submitDiv">
                    <button type="submit" className="btn btn-primary btn-lg">Confirm Selection</button>
                  </div>
                </form>
                <div id="pwChange-title">
                  <h4>Change your password</h4>
                </div>
              </div>
            </div>
        </div>
    )
  }
}