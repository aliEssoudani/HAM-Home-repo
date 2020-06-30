import React from "react";
import ReactDOM from "react-dom";

import {
  InputGroup,
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  FormLabel,
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
      rating: "not Rated",
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

  render() {
    return (
      <div className="rent">
        <Form>
          <Form.Group as={Col}>
            <Form.File
              className="position-relative"
              required
              name="image"
              label="Image :"
              id="imagesrc"
              // onChange={handleChange} isInvalid={!!errors.file} feedback={errors.file} feedbackTooltip
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
            <Form.Label>Price :</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Price"
                aria-describedby="inputGroupPrepend"
                name="price"

                // value={values.username} onChange={handleChange} isInvalid={!!errors.username}
              />
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRooms">
            <Form.Label>Rooms :</Form.Label>
            <Form.Control type="text" placeholder="Rooms" id="rooms" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address :</Form.Label>
            <Form.Control placeholder="1234 Main St" id="adress" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDescription">
            <Form.Label>Description :</Form.Label>
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
            onClick={this.handleClick.bind(this)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default PostView;
//       <Form>
//         <Form.Group as={Col}>
//           <Form.File
//             className="position-relative" required name="image" label="Image :" id="validationFormik107"
//           // onChange={handleChange} isInvalid={!!errors.file} feedback={errors.file} feedbackTooltip
//           />
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
//           <Form.Label>Price :</Form.Label>
//           <InputGroup>
//             <Form.Control
//               type="number" placeholder="Price" aria-describedby="inputGroupPrepend" name="price"
//             // value={values.username} onChange={handleChange} isInvalid={!!errors.username}
//             />
//             <InputGroup.Prepend>
//               <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
//             </InputGroup.Prepend>
//           </InputGroup>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridRooms">
//           <Form.Label>Rooms :</Form.Label>
//           <Form.Control type="text" placeholder="Rooms" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridAddress1">
//           <Form.Label>Address :</Form.Label>
//           <Form.Control placeholder="1234 Main St" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridDescription">
//           <Form.Label>Description :</Form.Label>
//           <textarea className="form-control" rows="5" id="comment"></textarea>
//         </Form.Group>

//         <Button as={Col} variant="primary" type="submit" onClick={this.handleClick.bind(this)}>Submit</Button>
//       </Form>
//       </div>
//     )
//   }
// }

// export default PostView;
// >>>>>>> 520d26d1e1d50f565f23839a58e1733a61dfc845
