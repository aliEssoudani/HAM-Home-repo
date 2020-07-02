import React from "react";
import ReactDOM from "react-dom";
import PostView from "./postView.jsx";
import SearchedHome from "./searchedHome.jsx";
import ChatRoom from "./chatHome.jsx";

import $ from "jquery";
import axios from "axios";
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
import SelectAction from "./selectAction.jsx";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  addPost() {
    ReactDOM.render(<PostView />, document.getElementById("app"));
  }

  seeSelectAction() {
    ReactDOM.render(<SelectAction />, document.getElementById("app"));
  }

  seePosts() {
    axios.get("/posts").then((res) => {
      const posts = res.data;
      this.setState({ posts });
      console.log(this.state.posts);
    });
  }

  updatePost(i) {
    console.log(this.state.posts[i]);
    ReactDOM.render(
      <SearchedHome post={this.state.posts[i]} />,
      document.getElementById("app")
    );
  }

  render() {
    const displayPosts = this.state.posts.map((item, i) => {
      return (
        <div
          className="profilePosts"
          onClick={this.updatePost.bind(this, i)}
          key={i}
        >
          <p className="postDetails">
            <img src={item.imagesrc} width="280px" height="170px" />
          </p>
          <p className="postDetails">Price : ${item.price}</p>
          <p className="postDetails">Rooms : {item.rooms}</p>
          <p className="postDetails">Address : {item.address}</p>
          {/* <p>{this.props.description}</p>
          <p>{this.props.date}</p>
          <p>{this.props.rating}</p> */}
        </div>
      );
    });
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={this.seeSelectAction.bind(this)}>
            HAMhome
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link className="logout">LogOut</Nav.Link>
          </Nav>
        </Navbar>
        <section className="section about-section gray-bg" id="about">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text go-to">
                  <h3 className="dark-color">Mohamed Amine Oueslati</h3>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>Birthday</label>
                        <p>26th september 1991</p>
                      </div>
                      <div className="media">
                        <label>Age</label>
                        <p>{2020 - 1991} years old</p>
                      </div>
                      <div className="media">
                        <label>Residence</label>
                        <p>Tunisia</p>
                      </div>
                      <div className="media">
                        <label>Address</label>
                        <p>Ben Arous, Tunisia</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>info@domain.com</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-avatar">
                  <img
                    src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"
                    width="400px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="counter">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div
                    className="count-data text-center"
                    onClick={this.addPost.bind(this)}
                  >
                    <h6 className="count h2" data-to="500" data-speed="500">
                      <img
                        src="https://cdn.onlinewebfonts.com/svg/img_259698.png"
                        width="30px"
                      />
                    </h6>
                    <p className="m-0px font-w-600">Post</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div
                    className="count-data text-center"
                    onClick={this.seePosts.bind(this)}
                  >
                    <h6 className="count h2" data-to="150" data-speed="150">
                      {this.state.posts.length}
                    </h6>
                    <p className="m-0px font-w-600">Num. of Posts</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="850" data-speed="850">
                      0
                    </h6>
                    <p className="m-0px font-w-600">House Rent</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="190" data-speed="190">
                      <img
                        src="https://icons-for-free.com/iconfiles/png/512/refresh+reload+update+icon-1320191166843452904.png"
                        width="30px"
                      />
                    </h6>
                    <p className="m-0px font-w-600">Update</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {displayPosts}
      </div>
    );
  }
}

export default ProfileView;
