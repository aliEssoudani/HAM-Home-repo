import React from "react";
import ReactDOM from "react-dom";
import darkmode from "../../dist/script.js";
import ProfileView from "./profileView.jsx";
import SelectAction from "./selectAction.jsx";
import ChatRoom from "./chatHome.jsx";
import PostView from "./postView.jsx";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  FormLabel,
  Navbar,
  Nav,
  Card,
  Carousel,
  CarouselItem,
  Accordion,
} from "react-bootstrap";

class SearchedHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  seeProfile() {
    ReactDOM.render(<ProfileView />, document.getElementById("app"));
  }
  seeSelectAction() {
    ReactDOM.render(<SelectAction />, document.getElementById("app"));
  }

  chat() {
    
    ReactDOM.render(<ChatRoom />, document.getElementById("chatbox"));
    $("#startchat").hide();
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={this.seeSelectAction.bind(this)}>
            HAMhome
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link onClick={this.seeProfile.bind(this)}>Profile</Nav.Link>
            <Nav.Link className="logout">LogOut</Nav.Link>
          </Nav>
        </Navbar>
        <div id="caroussel">
          <Carousel>
            <Carousel.Item>
              <img
                id="imagecaroussel"
                className="d-block w-100"
                src={this.props.post.imagesrc}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="imagecaroussel"
                className="d-block w-100"
                src="https://d2u8towkwolubl.cloudfront.net/wp-content/uploads/2019/08/RentalHome.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="imagecaroussel"
                className="d-block w-100"
                src="https://d2u8towkwolubl.cloudfront.net/wp-content/uploads/2019/08/RentalHome.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="context">
          <Accordion defaultActiveKey="0" id="according">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <h4>Description</h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> {this.props.post.description} </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h4>Address</h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body> {this.props.post.address} </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <h4>Equipment</h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {" "}
                  Price : ${this.props.post.price}
                  <br />
                  Rooms : {this.props.post.rooms}
                  <br />
                  Rating : {this.props.post.rating}
                  <br />
                  Availibility : {this.props.post.availibility}{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <Button variant="primary" id="startchat" onClick={this.chat.bind(this)}>
          Chat
        </Button>
        <div id="chatbox"></div>
      </div>
    );
  }
}

export default SearchedHome;
