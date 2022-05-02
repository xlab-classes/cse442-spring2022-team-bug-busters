import React from 'react';
import "../Profile.css";
import NavBar from "./NavBar";

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            userid: "",
        };
    }
    
    // componentDidMount(){
    //     this.setState({
    //         username: sessionStorage.getItem("username")
    //     })
    // }

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


