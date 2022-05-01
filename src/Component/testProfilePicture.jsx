import React from "react";
import "../css/settings.css"
import NavBar from "./NavBar";
import {
  Link
} from 'react-router-dom';
import { Nav } from "react-bootstrap";
import basic from '../assets/default.png';
import bee from '../assets/bee.png';
import flower from '../assets/flower.png';


// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"
//Use the following line for local testing!
const API = "http://localhost:8080/modals/"

export default class ProfilePictureExample extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "ray",
      profilePicture: basic,
    };
  }

componentDidMount(){
  this.getProfilePicture()
} 

getProfilePicture= error =>{
    fetch(API+"getProfilePicture.php", {
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
          if (result.picture == ""){
              this.setState({
                  profilePicture: basic,
              })
          }
          else if(result.picture == "bee.png"){
          this.setState({
            profilePicture: bee,
          })
        }
          else{
            this.setState({
                profilePicture: flower,
              }) 
          }
    });
    };


updatePicture= profilePicture =>{
  //make the api call to the authentication page
  fetch(API+"changeProfilePicture.php", {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: this.state.username,
      picture: profilePicture,
    })
  })
  .then(res => {
    //If the response is not okay, have the user input a new email address.
    if (profilePicture == ""){
        this.setState({
            profilePicture: basic,
        })
    }
    else if(profilePicture == "bee.png"){
    this.setState({
      profilePicture: bee,
    })
  }
    else{
      this.setState({
          profilePicture: flower,
        }) 
    }
    }
  );
};

  render(){
    return(
        <div>
        <NavBar>
        </NavBar>
        <h1>Points</h1>
        Username: {this.state.username}
        <br></br>
        Picture: 
        <br></br>
        <img src={this.state.profilePicture}></img>
        <br></br>
        <button type="submit" className="btn btn-primary" onClick={() => {this.updatePicture("bee.png")}}>
            Change Picture to Bee
        </button>
        <br></br>
        <button type="submit" className="btn btn-secondary" onClick={() => {this.updatePicture("flower.png")}}>
            Change Picture to Flower
        </button>
        </div>
    )
  }
}