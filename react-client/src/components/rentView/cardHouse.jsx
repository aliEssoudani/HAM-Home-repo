import React from "react";
const mdbreact = require('mdbreact'); const { Button, Collapse } = mdbreact;
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const CardHouse = () => {
  return (
      <div>
        <div>
          <img
            id="headerimages"
            src="./assets/imgs/bg.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div className="cardBox">
          <MDBRow>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardImage
                  top
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                  overlay="white-slight"
                  hover
                  waves
                  alt="MDBCard image cap"
                />
                <MDBCardBody className="elegant-color white-text rounded-bottom">
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <MDBIcon icon="share-alt" className="white-text" />
                  </a>
                  <MDBCardTitle>MDBCard Title</MDBCardTitle>
                  <hr className="hr-light" />
                  <MDBCardText className="white-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                  >
                    <h5 className="white-text">
                      Read more
                      <MDBIcon icon="angle-double-right" className="ml-2" />
                    </h5>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            {/* <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody className="elegant-color white-text rounded-bottom">
                <a
                  href="#!"
                  className="activator waves-effect waves-light mr-4"
                >
                  <MDBIcon icon="share-alt" className="white-text" />
                </a>
                <MDBCardTitle>MDBCard Title</MDBCardTitle>
                <hr className="hr-light" />
                <MDBCardText className="white-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <a href="#!" className="black-text d-flex justify-content-end">
                  <h5 className="white-text">
                    Read more
                    <MDBIcon icon="angle-double-right" className="ml-2" />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody className="elegant-color white-text rounded-bottom">
                <a
                  href="#!"
                  className="activator waves-effect waves-light mr-4"
                >
                  <MDBIcon icon="share-alt" className="white-text" />
                </a>
                <MDBCardTitle>MDBCard Title</MDBCardTitle>
                <hr className="hr-light" />
                <MDBCardText className="white-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <a href="#!" className="black-text d-flex justify-content-end">
                  <h5 className="white-text">
                    Read more
                    <MDBIcon icon="angle-double-right" className="ml-2" />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody className="elegant-color white-text rounded-bottom">
                <a
                  href="#!"
                  className="activator waves-effect waves-light mr-4"
                >
                  <MDBIcon icon="share-alt" className="white-text" />
                </a>
                <MDBCardTitle>MDBCard Title</MDBCardTitle>
                <hr className="hr-light" />
                <MDBCardText className="white-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <a href="#!" className="black-text d-flex justify-content-end">
                  <h5 className="white-text">
                    Read more
                    <MDBIcon icon="angle-double-right" className="ml-2" />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
          </MDBRow>
        </div>
        </div>
    );
};

export default CardHouse;
