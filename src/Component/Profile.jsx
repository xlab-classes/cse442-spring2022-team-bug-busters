import React from 'react';
import "../Profile.css";
import NavBar from "./NavBar";
import profilePic from '../assets/flower.png';
export default function Profile() {
  return (
    <div>
      {/* <div id='navbar'>
        <div id="navbarLeftside">
          Home
        </div>
        <div id="navbarRightside">
          Username
        </div>
      </div> */}

      <NavBar>
        
      </NavBar>

      <div id='profile'>
        <img src={profilePic} alt="profile" id='profilepicture'/>
        <div id = 'profileInformation'>
          <p>Player Name</p>
          <p>Rank #4104</p>
          <p>Wins: 103 | Losses: 34</p>
        </div>

      </div>
      
    </div>


  )
}


