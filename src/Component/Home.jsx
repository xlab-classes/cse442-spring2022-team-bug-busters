import React from 'react';
import "../Profile.css";
import NavBar from "./NavBar";
import profilePic from '../assets/flower.png';

export default class HomePage extends React.Component {
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


