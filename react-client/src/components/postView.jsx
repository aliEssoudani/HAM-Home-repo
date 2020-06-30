
import React from "react";
import ReactDOM from "react-dom";
import ProfileView from "./profileView.jsx";
import {
  InputGroup,
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Link,
  FormLabel,
  Nav,
  Navbar,
} from "react-bootstrap";
import SelectAction from "./selectAction.jsx";
import $ from "jquery";
import axios from "axios";

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick() {
    const price = $("#price").val();
    const rooms = $("#rooms").val();
    const imagesrc = $("#imagesrc").val();
    const adress = $("#adress").val();
    const description = $("#description").val();

    console.log(price, rooms, description);
    axios.post("/posts", {
      imagesrc,
      price,
      rooms,
      adress,
      rating: 5,
      description,
      date: new Date(),
      availibility: true,
    });
    // .then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    ReactDOM.render(<SelectAction />, document.getElementById("app"));
  }

  seeProfile() {
    ReactDOM.render(<ProfileView />, document.getElementById("app"));
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>HAMhome</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link onClick={this.seeProfile.bind(this)}>Profile</Nav.Link>
            <Nav.Link className="logout">LogOut</Nav.Link>
          </Nav>
        </Navbar>
        <div id="first">
          <Form className="rent">
            <Form.Group as={Col}>
            <Form.Label>
                {" "}
                <h5>Image :</h5>{" "}
              </Form.Label>
              <Form.File
                className="position-relative"
                required
                name="image"
                id="imagesrc"
                // onChange={handleChange} isInvalid={!!errors.file} feedback={errors.file} feedbackTooltip
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>
                {" "}
                <h5>Price :</h5>{" "}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  aria-describedby="inputGroupPrepend"
                  name="price"
                  id="price"

                  // value={values.username} onChange={handleChange} isInvalid={!!errors.username}
                />
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRooms">
              <Form.Label>
                {" "}
                <h5>Rooms :</h5>{" "}
              </Form.Label>
              <Form.Control type="text" placeholder="Rooms" id="rooms" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>
                <h5>Address :</h5>
              </Form.Label>
              <Form.Control placeholder="1234 Main St" id="address" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>
                {" "}
                <h5>Description :</h5>{" "}
              </Form.Label>
              <textarea
                className="form-control"
                rows="5"
                id="description"
              ></textarea>
            </Form.Group>

            <Button
              as={Col}
              variant="primary"
              type="submit"
              id="submitPost"
              onClick={this.handleClick.bind(this)}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div id="second">
          {" "}
          <center>
            {" "}
            <h1>Important Note</h1>
          </center>{" "}
          <ul>
            <li>
              <h4>Never communicate your card number</h4>
            </li>
            <li>
              <h4>Make sure the photos are real</h4>
            </li>
            <li>
              <h4>precise the exact adress </h4>
            </li>
            <li>
              <h4>use the Google map</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostView;