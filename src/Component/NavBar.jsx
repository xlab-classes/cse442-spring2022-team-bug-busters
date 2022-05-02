import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

// Use the following line for deployment!
//const API = "https://www-student.cse.buffalo.edu/CSE442-542/2022-Spring/cse-442h/backend/api/modals/"

//Use the following line for local testing!
const API = "http://localhost:8080/modals/"

let public_imgs_path = process.env.PUBLIC_URL + "/profile_pictures/"
export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: sessionStorage.getItem("username"),
      profile_picture: "",
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
    this.setState({
      username: sessionStorage.getItem("username")
    })
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
    .then((result) =>{
        if(result.picture.length === 0){
          let path_pic = public_imgs_path + "pic0.png";
          sessionStorage.setItem("pfp", "pic0.png");
          this.setState({
            profile_picture: path_pic
          })
        }else{
          let current_pfp = result.picture;
          let path_pic = public_imgs_path + current_pfp;
          sessionStorage.setItem("pfp", current_pfp);
          this.setState({
            profile_picture: path_pic
          })
        }
    });
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand href="/CSE442-542/2022-Spring/cse-442h/">
              <img
                alt=""
                src={this.state.profile_picture}
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
                    src={this.state.profile_picture}
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
