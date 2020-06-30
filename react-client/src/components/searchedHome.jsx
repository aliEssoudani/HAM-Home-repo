import React from "react";
import ReactDOM from "react-dom";
import darkmode from "../../dist/script.js";
import ProfileView from "./profileView.jsx";
import SelectAction from "./selectAction.jsx";
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

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={this.seeSelectAction.bind(this)}>HAMhome</Navbar.Brand>
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
                src="https://d2u8towkwolubl.cloudfront.net/wp-content/uploads/2019/08/RentalHome.jpg"
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
                <Card.Body>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  saepe tempore minima harum magni minus animi eaque, nam
                  perferendis ex reprehenderit consectetur. Sint officiis
                  molestiae voluptates eum, architecto enim omnis.{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h4>Address</h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {" "}
                  ariana technopole 2541 tunis near esta product{" "}
                </Card.Body>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, dignissimos recusandae. Eos distinctio velit officia
                  perferendis. Suscipit voluptatum aspernatur, vero harum
                  consectetur illo enim odio! Libero molestiae totam molestias
                  iure.{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default SearchedHome;
