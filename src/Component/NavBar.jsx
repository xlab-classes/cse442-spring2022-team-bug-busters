import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      errors: {}
    };
  }

  logoutUser(){
    this.deleteSession();
  }

  deleteSession(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand href="/CSE442-542/2022-Spring/cse-442h/">
            <img
              alt=""
              src="flower.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bug Busters
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#deets">{sessionStorage.getItem("username")}</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">Settings</Nav.Link>
                <Nav.Link onClick={this.logoutUser()} href="/CSE442-542/2022-Spring/cse-442h/">Logout</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
