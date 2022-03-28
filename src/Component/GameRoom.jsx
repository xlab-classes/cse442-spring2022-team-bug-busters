import React from "react";
import tempCard from "../assets/cardPlaceholder.jpg";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import * as Icon from 'react-bootstrap-icons';
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class GameRoom extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      players: [],
      userid: "",
    };
  }
  

  render(){
    return(
        <div className="gameRoom">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Bug Busters</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Username</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Settings
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mainContent">
                <Row>
                    <Col className="participants">
                        <ListGroup>
                            <ListGroup.Item className="player">Username (You)</ListGroup.Item>
                            <ListGroup.Item className="player">Player 1</ListGroup.Item>
                            <ListGroup.Item className="player">Player 2</ListGroup.Item>
                            <ListGroup.Item className="player">Player 3</ListGroup.Item>
                            <ListGroup.Item className="player">Player 4</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="gameplay">
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={tempCard} />
                                <Card.Body>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                    <button type="button" class="btn btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        &nbsp;
                        Leave
                    </button>
                    </Col>
                </Row>
                <Row>
                    <Col>This is where the chatbox will be</Col>
                    <Col>
                        <div className="card-hand">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={tempCard} />
                                <Card.Body>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}