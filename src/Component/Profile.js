import React from 'react';
export default function Profile() {
  return (
    <div>
      <div id='navbar'>
        <div id="navbarLeftside">
          Home
        </div>
        <div id="navbarRightside">
          Username
        </div>
      </div>

      <div id='profile'>
        <img src={'/image/flower.png'} alt="profile" id='profilepicture'/>
        <div id = 'profileInformation'>
          <p>Player Name</p>
          <p>Rank #4104</p>
          <p>Wins: 103 | Losses: 34</p>
        </div>

      </div>
      
    </div>


  )
}


