import React from 'react';
import "../css/Profile.css";
import NavBar from "./NavBar";

// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
const API = "http://localhost:8080/modals/"

let public_imgs_path = process.env.PUBLIC_URL + "/profile_pictures/"
export default class Profile extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      username: sessionStorage.getItem('username'),
      points: 0,
      wins: 0,
      losses: 0,
      profile_pic: ""
    };
  }
  componentDidMount(){
    this.getPoints();
  } 
  
  getPoints = error =>{
    fetch(API+"getStats.php", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
        })
    })
    .then((res) => res.json())
    .then( (result) =>{
      //If the response is not okay, have the user input a new email address.
        this.setState({
          points: result.Points,
          wins: result.Wins,
          losses: result.Losses,
          profile_pic: public_imgs_path + sessionStorage.getItem("pfp")
        })
      }
    );
  };

  
  render(){
    return (
      <div>
        <NavBar>
        </NavBar>
        <div id='profile'>
          <div id='profilePictureSection'>
            <img src={this.state.profile_pic} alt="profile" id='profilepicture' height="70" width="70"/>
          </div>
          <div id = 'profileInformation'>
            <p>{this.state.username}</p>
            <p>Points: {this.state.points}</p>
            <p>Wins: {this.state.wins} | Losses: {this.state.losses}</p>
          </div>
        </div>
      </div>
    )
  }
 
}


