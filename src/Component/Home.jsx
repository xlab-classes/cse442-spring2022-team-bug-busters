import React from 'react';
import "../Profile.css";
import NavBar from "./NavBar";
import pic0 from "../assets/profile_pictures/pic0.png";
// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
const API = "http://localhost:8080/modals/"
export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userid: "",
        };
    }
    
    componentDidMount(){
        this.setState({
            username: sessionStorage.getItem("username")
        })
        console.log(sessionStorage.getItem("username"));
    }

    render(){
        return(
            <div id="settings">
                <div id="navbar-div">
                    <NavBar></NavBar>
                </div>
                <div className="containerSettings">
                    <div id="title">
                        <h2>Leaderboard</h2>
                    </div>
                </div>
            </div>
        )
    }
}


