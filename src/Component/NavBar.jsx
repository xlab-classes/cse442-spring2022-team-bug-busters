import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import profile_pic from "../assets/profile_pictures/pic0.png";
// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
const API = "http://localhost:8080/modals/"
export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: sessionStorage.getItem("username"),
      errors: {}
    };
  }

  logoutUser(){
    this.deleteSession();
  }

  deleteSession(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    document.location = "/CSE442-542/2022-Spring/cse-442h/";
  }

  componentDidMount(){
    fetch(API + "getProfilePicture.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    })
    .then(response => response.json())
    .then((res) => {
        console.log(res);
    })
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand href="/CSE442-542/2022-Spring/cse-442h/">
              <img
                alt=""
                src={profile_pic}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Bug Busters
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <a href={"/CSE442-542/2022-Spring/cse-442h/user/" + this.state.username}>
                  <img
                    alt=""
                    src={profile_pic}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                  />{' '}
                </a>
                <Nav.Link href={"/CSE442-542/2022-Spring/cse-442h/user/" + this.state.username}>{this.state.username}</Nav.Link>
                <Nav.Link eventKey={2} href="/CSE442-542/2022-Spring/cse-442h/settings">Settings</Nav.Link>
                <Nav.Link onClick={() => this.logoutUser()}>Logout</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
