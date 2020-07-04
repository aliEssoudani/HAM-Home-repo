import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import SelectAction from "./components/selectAction.jsx";
import SearchedHome from "./components/searchedHome.jsx";
import ProfileView from "./components/profileView.jsx";
import PostView from "./components/postView.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import Navbar from "./components/rentView/Navbar.jsx";
import CardHouse from "./components/rentView/cardHouse.jsx";
import SelectBox from "./components/rentView/selectBox.jsx";
import Home from "./components/homePage/App.js";
import UpdatePost from "./components/updatePost.jsx";
const mdbreact = require("mdbreact");
const { Button, Collapse } = mdbreact;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "/items",
  //     success: (data) => {
  //       this.setState({
  //         items: data,
  //       });
  //     },
  //     error: (err) => {
  //       console.log("err", err);
  //     },
  //   });
  // }

  render() {
    return (
      <ProfileView />
      // <div>
      //   <CardHouse />
      // <Navbar />
      // <SelectBox />
      // </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
