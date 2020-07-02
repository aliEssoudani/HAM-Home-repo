import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import SelectAction from "./components/selectAction.jsx";
import SearchedHome from "./components/searchedHome.jsx";
import ProfileView from "./components/profileView.jsx";
import PostView from "./components/postView.jsx";
import ChatRoom from "./components/chatHome.jsx";

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
    return <ProfileView   />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
